import { useState } from 'react';
import { any } from 'prop-types';
import { AuthContext } from './AuthContext';
import { authMethods } from './firebase';

const AuthProvider = ({ children }) => {
	const [inputs, setInputs] = useState({ email: '', password: '' });
	const [errors, setErrors] = useState([]);
	const [token, setToken] = useState(null);
	const [user, setUser] = useState(null);

	const { register, login, logout, google, github } = authMethods;
	const { email, password } = inputs;

	const handleRegister = () =>
		register(email, password, setErrors, setToken, setUser);
	const handleLogin = () =>
		login(email, password, setErrors, setToken, setUser);
	const handleGoogleAuth = () => google(setErrors, setToken, setUser);
	const handleGithubAuth = () => github(setErrors, setToken, setUser);
	const handleLogout = () => logout(setErrors, setToken, setUser);

	return (
		<AuthContext.Provider
			value={{
				inputs,
				errors,
				token,
				user,
				setInputs,
				setErrors,
				setUser,
				handleRegister,
				handleLogin,
				handleGoogleAuth,
				handleGithubAuth,
				handleLogout,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

AuthProvider.propTypes = {
	children: any,
};

export { AuthProvider };
