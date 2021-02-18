import { useState, useContext, useEffect } from 'react';
import { func } from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Form, ButtonGroup } from '../styles';
import { AuthContext } from '../../../contexts';
import { colour, space } from '../../../shared';
import { Button, Input } from '../../../components';

const RegisterForm = ({ updateShow, closeDropdown }) => {
	const {
		token,
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
	const [redirect, setRedirect] = useState(false);

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
		token && setRedirect(true);
		token && updateShow();
	}, [token]);

	if (redirect) return <Redirect to='/dashboard' />;

	return (
		<>
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
							marginBottom: space.medium[200],
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
				<div>
					<Button
						fill='fill'
						colour='blue'
						border='minimal'
						type='submit'
						action={() => {
							handleRegister();
							closeDropdown();
						}}
						text='Register'
						disabled={disabled}
						style={{
							margin: '0 auto',
							minWidth: '50%',
						}}
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

RegisterForm.propTypes = {
	updateShow: func.isRequired,
	closeDropdown: func,
};

export default RegisterForm;
