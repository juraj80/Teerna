import { useContext, useEffect, useState } from 'react';
import { AlertContext, ModalContext, SessionContext } from '../../../contexts';
import { Input, Modal, Button } from '../../core';
import { Container, Form, Title,  Errors, ButtonBlock } from './styles';

export default function SessionActions() {
	const { 
        user, setSessionErrors, sessionErrors, guid, message, setSessionInputs, handleCreateSession, handleJoinSession
	} = useContext(SessionContext);
	const addAlert = useContext(AlertContext);
	const { updateShow, updateContent, updateLocked } = useContext(ModalContext);
	const [modal, setModal] = useState(undefined);
	const [gameIdInput, setGameIdInput] = useState('');

	useEffect(() => {
		if (message) sessionErrors ? addAlert('error', message) : addAlert('success', message);
	}, [sessionErrors, message]);


	useEffect(() => {
		if (modal) {
			updateShow(false);
			updateLocked(true);
			setSessionErrors([]);
			updateContent(() => ({ state }) => (
				<Modal state={state} updateShow={updateShow}>
					{guid && updateShow(false)}
					<Form>
						<Title>Join Session with Code</Title>
						{sessionErrors && (
							<Errors>
								{sessionErrors.map((err,idx) => (
									<li key={idx}>{err.message}</li>
								))}
							</Errors>
						)}
						<Input
							nameAttr='invitation-code'
							requiredField
							placeholder='Invitation Code'
							value={gameIdInput}
							setValue={setGameIdInput}
						/>
						<Button
							style={{ marginTop: '24px'}}
							glowing
							type='button'
							status='info'
							action={() => {
								setSessionInputs({ email: user.email, gameId: gameIdInput });
								handleJoinSession();
							}}
						>
							Submit
						</Button>
					</Form>
				</Modal>
			));
			updateLocked(false);
			updateShow(true);
		}
		return () => setModal(undefined);
	}, [modal]);

	return (
		<Container>
			<ButtonBlock onClick={handleCreateSession}>
				<h1>Create Game - Become GM</h1>
			</ButtonBlock>
			<ButtonBlock onClick={() => setModal('join-session')}>
				<h1>Join Session - use invitation code to Join a Session</h1>
			</ButtonBlock>
		</Container>
	);
}
