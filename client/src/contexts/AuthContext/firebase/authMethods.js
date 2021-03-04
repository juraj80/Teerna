import firebase from 'firebase';
import { googleProvider, githubProvider } from './';

export const authMethods = {
	register: (email, password, setErrors, setToken, setUser) => {
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then(async res => {
				setUser(res.user);
				localStorage.setItem('authUser', res.user);
				const token = await Object.entries(res.user)[5][1].b;
				await localStorage.setItem('token', token);
				setToken(token);
			})
			.catch(err => setErrors(prev => [...prev, err.message]));
	},
	login: (email, password, setErrors, setToken, setUser) => {
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(async res => {
				setUser(res.user);
				localStorage.setItem('authUser', res.user);
				const token = await Object.entries(res.user)[5][1].b;
				await localStorage.setItem('token', token);
				setToken(token);
			})
			.catch(err => setErrors(prev => [...prev, err.message]));
	},
	google: (setErrors, setToken, setUser) => {
		firebase
			.auth()
			.signInWithPopup(googleProvider)
			.then(async res => {
				setUser(res.user);
				localStorage.setItem('authUser', res.user);
				const token = await Object.entries(res.user)[5][1].b;
				await localStorage.setItem('token', token);
				setToken(token);
			})
			.catch(err => setErrors(prev => [...prev, err.message]));
	},
	github: (setErrors, setToken, setUser) => {
		firebase
			.auth()
			.signInWithPopup(githubProvider)
			.then(async res => {
				setUser(res.user);
				localStorage.setItem('authUser', res.user);
				const token = await Object.entries(res.user)[5][1].b;
				await localStorage.setItem('token', token);
				setToken(token);
			})
			.catch(err => setErrors(prev => [...prev, err.message]));
	},
	logout: (setErrors, setToken, setUser) => {
		firebase
			.auth()
			.signOut()
			.then(res => {
				setUser(null);
				localStorage.removeItem('token');
				setToken(null);
			})
			.catch(err => {
				setErrors(prev => [...prev, err.message]);
				localStorage.removeItem('token');
				setToken(null);
			});
	},
};
