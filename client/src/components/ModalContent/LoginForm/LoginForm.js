import { useState, useContext, useEffect } from 'react';
import { func } from 'prop-types';
// import { Redirect } from 'react-router-dom';
import { Form, FormTitle, ButtonGroup } from '../styles';
import { AuthContext } from '../../../contexts';
import { colour, space } from '../../../shared';
import { Button, Input } from '../../../components';

const LoginForm = ({ updateShow, closeDropdown }) => {
	const {
		inputs,
		errors,
		setInputs,
		handleLogin,
		handleGoogleAuth,
		handleGithubAuth,
	} = useContext(AuthContext);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	useEffect(() => {
		email && setInputs({ ...inputs, email });
		password && setInputs({ ...inputs, password });
	}, [email, password]);

	useEffect(() => {
		const token = localStorage.getItem('token');
		token && updateShow();
	}, [handleLogin, handleGoogleAuth, handleGithubAuth]);

	return (
		<>
			<FormTitle>Login</FormTitle>
			<Form>
				<div>
					<Input
						style={{
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
						style={{
							maxWidth: '85%',
							margin: '0 auto',
							marginBottom: space.medium[200],
						}}
						name='password'
						type='password'
						placeholder='Password'
						setValue={setPassword}
						value={password}
					/>
				</div>
				<div>
					{errors && errors.length > 0 && (
						<p
							style={{
								color: colour.status.error,
								textAlign: 'center',
								fontSize: '13px',
							}}
						>
							{errors[errors.length - 1]}
						</p>
					)}
				</div>
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<Button
						fill='fill'
						colour='blue'
						border='minimal'
						type='submit'
						action={() => {
							handleLogin();
							closeDropdown && closeDropdown();
						}}
						text='Submit'
					/>
				</div>
			</Form>
			<ButtonGroup>
				<Button
					style={{ padding: `${space.medium[100]} ${space.medium[300]}` }}
					fill='fill'
					colour='white'
					border='regular'
					type='button'
					icon='google'
					action={() => {
						handleGoogleAuth();
						closeDropdown();
					}}
				/>
				<Button
					style={{ padding: `${space.medium[100]} ${space.medium[300]}` }}
					fill='fill'
					colour='white'
					border='regular'
					type='button'
					icon='github'
					action={() => {
						handleGithubAuth();
						closeDropdown();
					}}
				/>
			</ButtonGroup>
		</>
	);
};

LoginForm.propTypes = {
	updateShow: func.isRequired,
	closeDropdown: func,
};

export default LoginForm;
