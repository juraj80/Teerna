import { useState } from 'react';
import LoginTab from './LoginTab/LoginTab';
import RegisterTab from './RegisterTab/RegisterTab';

export default function AuthenticationForm(initialState = 'login') {
	const [formType, setFormType] = useState(initialState);
	
	return formType === 'login' ? (
		<LoginTab switchForms={() => setFormType('register')} />
	) : (
		<RegisterTab switchForms={() => setFormType('login')} />
	);
}
