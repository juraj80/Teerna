import { useContext, useEffect, useState } from 'react';
import { AlertContext, AuthContext, ModalContext, SessionContext } from '../../../contexts';
import { Input, Modal, Button } from '../../core';
import { Container, Form, Title,  Errors, ButtonBlock } from './styles';

export default function SessionActions() {
  let guidinput;
	const { 
					setSessionErrors, sessionErrors, guid, setGuid, message, handleCreateSession, handleJoinSession
	} = useContext(SessionContext);
	const addAlert = useContext(AlertContext);
	const { updateShow, updateContent, updateLocked } = useContext(ModalContext);
	const [modal, setModal] = useState(undefined);
	const user = useContext(AuthContext);

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
							type='text'
							nameAttr='text'
							placeholder='Invitation Code'
							setValue={(v) => guidinput = v}
							requiredField
						/>
						<Button
							style={{ marginTop: '24px'}}
							type='button'
							status='info'
							action={() => {
								handleJoinSession(guidinput);
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
