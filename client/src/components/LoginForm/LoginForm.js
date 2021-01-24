import { useContext } from 'react';
import { AuthContext } from '../../contexts';
import Button from '../Button';

const LoginForm = () => {
	const [loginWithGoogle, loginWithGithub] = useContext(AuthContext);
	return (
		<>
			<Button
				action={loginWithGoogle}
				icon='google'
				styletype='google'
				text='Google Authentication'
			/>
			<Button
				action={loginWithGithub}
				icon='github'
				styletype='github'
				text='Github Authentication'
			/>
		</>
	);
};
