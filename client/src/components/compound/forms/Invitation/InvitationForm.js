import { useContext, useState } from 'react';
import { SessionContext } from '../../../../contexts';
import { Button, Input } from '../../../core';
import { Form, MsgText, CodeText } from './styles';

export default function InvitationForm() {
	const { handleCreateInvitation, setSessionInputs, guid, message } = useContext(SessionContext);
	const [email, setEmail] = useState('');

	return (
		<Form>
			<div style={{ minHeight: '24px'}}/>
			<Input type='email' value={email} setValue={setEmail} placeholder='Recipient Email' leftIcon='email' requiredField/>
			<Button type='button' status='info' action={() => { 	
                setSessionInputs({ email, gameId: guid }); 
                handleCreateInvitation(); 
            }}>
				Generate Invitation
			</Button>
			<div style={{ minHeight: 'fit-content'}}>
				{message && guid && (
					<>
						<MsgText>{message}</MsgText>
						<CodeText>{guid}</CodeText>
					</>
				)}
			</div>
		</Form>
	);
}
