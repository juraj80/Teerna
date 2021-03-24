import { useState, useContext, useEffect } from 'react';
import { Form, Container } from '../styles';
import { AuthContext } from '../../../../../contexts';
import { Input, Button, Icon } from '../../../../core';

export default function LoginTab({ switchForms }) {
	const { handleLogin, setInputs, errors, setErrors, handleGoogleAuth, handleGithubAuth } = useContext(AuthContext);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordFieldType, setPasswordFieldType] = useState('password');
	useEffect(() =>
	console.log(email),[]);
	
	return (
		<Container>
		<Form role='form' id='login-form' aria-label='login form'>
			<p className='switch-tab'
				onClick={() => {
                	setErrors([]);
                	switchForms();
            }}>
               Don't have an account?
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
            {errors.length > 0 && <p className='errortext'>{errors[0]}</p>}
			</Form>
			<div style={{ width: '260px', height: '56px', display: 'flex', alignItems: 'center'}}>
				<Button style={{borderBottomRightRadius: 0, borderTopRightRadius:0, width: '180px'}} type='submit' accent='pink' disabled={password === ''} action={() =>{ 
					setInputs({email, password});
					handleLogin();
				}}>
					Login
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
