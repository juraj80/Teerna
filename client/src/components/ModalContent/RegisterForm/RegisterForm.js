import { useState, useContext, useEffect } from 'react';
import { func } from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Form, ButtonGroup, FormTitle } from '../styles';
import { AuthContext } from '../../../contexts';
import { colour, space } from '../../../shared';
import { Button, Input } from '../../../components';

const RegisterForm = ({ updateShow, closeDropdown }) => {
	const {
		inputs,
		errors,
		handleRegister,
		setInputs,
		handleGoogleAuth,
		handleGithubAuth,
	} = useContext(AuthContext);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordConfirm, setPasswordConfirm] = useState('');
	const [disabled, setDisabled] = useState(true);

	useEffect(() => {
		email && setInputs({ ...inputs, email });
		password && setInputs({ ...inputs, password });
		passwordConfirm && setInputs({ ...inputs, passwordConfirm });
	}, [email, password, passwordConfirm]);

	useEffect(() => {
		password !== '' && password === passwordConfirm && setDisabled(false);
		password !== passwordConfirm && setDisabled(true);
	}, [passwordConfirm]);

	useEffect(() => {
		const token = localStorage.getItem('token');
		token && updateShow();
	}, [handleRegister, handleGoogleAuth, handleGithubAuth]);

	return (
		<>
			<FormTitle>Create Account</FormTitle>
			<Form>
				<div>
					<Input
						name='email'
						type='email'
						placeholder='Email'
						setValue={setEmail}
						value={email}
						style={{
							maxWidth: '85%',
							margin: '0 auto',
							marginBottom: space.medium[100],
						}}
					/>
					<Input
						name='password'
						type='password'
						placeholder='Password'
						setValue={setPassword}
						value={password}
						style={{
							maxWidth: '85%',
							margin: '0 auto',
							marginBottom: space.medium[100],
						}}
					/>
					<Input
						name='passwordConfirm'
						type='password'
						placeholder='Confirm Password'
						setValue={setPasswordConfirm}
						value={passwordConfirm}
						style={{
							maxWidth: '85%',
							margin: '0 auto',
							marginBottom: '0',
						}}
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
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
					}}
				>
					<Button
						fill='fill'
						colour='blue'
						border='minimal'
						type='submit'
						action={() => {
							handleRegister();
							closeDropdown && closeDropdown();
						}}
						text='Register'
						disabled={disabled}
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
						closeDropdown && closeDropdown();
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
						closeDropdown && closeDropdown();
					}}
				/>
			</ButtonGroup>
		</>
	);
};

RegisterForm.propTypes = {
	updateShow: func.isRequired,
	closeDropdown: func,
};

export default RegisterForm;
