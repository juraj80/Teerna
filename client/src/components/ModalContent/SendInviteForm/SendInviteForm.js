import { useContext, useState } from 'react';
import { func } from 'prop-types';
import { AuthContext } from '../../../contexts';
import { space } from '../../../shared';
import { Button, Input } from '../../';
import { Form, FormTitle } from '../styles';

const SendInviteForm = ({ updateShow, inviteToGame }) => {
	const { token } = useContext(AuthContext);
	const [email, setEmail] = useState('');
	const [guid, setGuid] = useState('');
	return (
		<>
			<FormTitle>Send Invitation</FormTitle>
			<Form>
				<>
					<Input
						stype={{
							maxWidth: '85%',
							margin: '0 auto',
							marginBottom: space.medium[100],
						}}
						name='email'
						type='email'
						placeholder='Email'
						setValue={setEmail}
						value={email}
					/>
					<Input
						stype={{
							maxWidth: '85%',
							margin: '0 auto',
							marginBottom: space.medium[100],
						}}
						name='guid'
						type='text'
						placeholder='Game ID'
						setValue={setGuid}
						value={guid}
					/>
				</>
				<>
					<Button
						fill='fill'
						colour='blue'
						border='minimal'
						type='submit'
						action={() => {
							inviteToGame({ token, guid, email });
							updateShow();
						}}
						text='Send'
						style={{ margin: '0 auto', minWidth: '50%' }}
					/>
				</>
			</Form>
		</>
	);
};

SendInviteForm.propTypes = {
	updateShow: func.isRequired,
	inviteToGame: func.isRequired,
};

export default SendInviteForm;
