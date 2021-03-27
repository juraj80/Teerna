import { useState, useContext } from 'react';
import { Form, Container } from '../styles';
import { AuthContext } from '../../../../../contexts';
import { Icon, Input, Button } from '../../../../core';

export default function RegisterTab({ switchForms }) {
	const { handleRegister, setInputs, errors, setErrors, handleGoogleAuth, handleGithubAuth } = useContext(AuthContext);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordFieldType, setPasswordFieldType] = useState('password');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [confirmPasswordFieldType, setConfirmPasswordFieldType] = useState('password');

	return (
		<Container>
		<Form role='form' id='register-form' aria-label='register form'>
			<p className='switch-tab'
				onClick={() => {
                	setErrors([]);
                	switchForms();
				}}
			>
        		Already have an account?
       	 	</p>
			<Input
				nameAttr='email'
				type='email'
				value={email}
				setValue={setEmail}
				placeholder='Email'
				leftIcon='email'
				requiredField
			/>
			<Input
				nameAttr='password'
				type={passwordFieldType}
				value={password}
				setValue={setPassword}
				placeholder='Password'
				leftIcon='key'
				rightIcon='eye'
				rightIconAction={() =>
					setPasswordFieldType(
						passwordFieldType === 'password' ? 'text' : 'password'
					)
				}
				requiredField
			/>
			<Input
				nameAttr='confirm-password'
				type={confirmPasswordFieldType}
				value={confirmPassword}
				setValue={setConfirmPassword}
				placeholder='Confirm Password'
				leftIcon='key'
				rightIcon='eye'
				rightIconAction={() =>
					setConfirmPasswordFieldType(
						confirmPasswordFieldType === 'password' ? 'text' : 'password'
					)
				}
				requiredField
			/>
			{errors.length > 0 && <p height='64px' className='errortext'>{errors[0]}</p>}
			
			</Form>
			<div style={{ width: '260px', height: '56px', display: 'flex', alignItems: 'center'}}>
				<Button style={{borderBottomRightRadius: 0, borderTopRightRadius:0, width: '180px'}} type='submit' accent='pink' disabled={password !== confirmPassword || password === ''} action={() =>{ 
					setInputs({email, password});
					handleRegister();
				}}>
					Register
				</Button>
				<Button style={{borderRadius: 0}} type='button'accent='white' action={handleGoogleAuth}>
					<Icon icon='google' status='action'/>
				</Button>
				<Button style={{borderTopLeftRadius: 0, borderBottomLeftRadius: 0}} type='button' accent='white' action={handleGithubAuth}>
					<Icon icon='github' status='action'/>
				</Button>
			</div>
		</Container>
	);
}
