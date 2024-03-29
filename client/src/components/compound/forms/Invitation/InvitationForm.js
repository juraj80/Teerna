import { useContext, useState } from 'react';
import { SessionContext } from '../../../../contexts';
import { Button, Input } from '../../../core';
import { Form, MsgText, CodeText } from './styles';

export default function InvitationForm() {
	const { handleCreateInvitation, setSessionInputs, guid, message } = useContext(SessionContext);
	let invited = '';

	return (
		<Form>
			<div style={{ minHeight: '24px'}}/>
			<Input type='email' setValue={(v) => invited = v} placeholder='Recipient Email' leftIcon='email' requiredField/>
			<Button type='button' status='info' action={() => { 	
				setSessionInputs({ gameId: guid });
				handleCreateInvitation(invited);
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
