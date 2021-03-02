import { useContext, useState } from 'react';
import { func } from 'prop-types';
import { Button, Input } from '../../../components';
import { Form } from './styles';
import { AlertContext, auth, AuthContext, firestore } from '../../../contexts';

export default function Username({ updateShow, closeDropdown }) {
	const [username, setUsername] = useState('');
	const { user, setUser } = useContext(AuthContext);
	const addAlert = useContext(AlertContext);

	const updateUsername = () => {
		firestore
			.collection('users')
			.doc(auth.currentUser.uid)
			.set({ ...user, username })
			.then(() => {
				setUser({ ...user, username });
				addAlert('success', `Username ${username} has been updated.`);
                updateShow();
                closeDropdown();
            })
			.catch(err => {
				addAlert('error', err.message);
			});
	};

	return (
		<Form>
			<Input type='text' value={username} setValue={setUsername} />
			<Button action={() => updateUsername()} label='Update' type='submit' />
		</Form>
	);
}

Username.propTypes = {
	updateShow: func.isRequired,
	closeDropdown: func,
};
