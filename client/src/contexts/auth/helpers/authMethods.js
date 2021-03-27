import { googleProvider, githubProvider, auth, firestore } from '../../../firebase';

const addNewUserToFirestore = user => {
	const collection = firestore.collection('users');
	const { profile } = user.additionalUserInfo;
	const details = {
		username: profile.name,
		email: profile.email,
		picture: profile.picture,
	};
	collection.doc(auth.currentUser.uid).set(details);
	return { user, details };
};

export const authMethods = {
	register: (username, email, password, picture, setErrors, setToken, setUser
	) => {
		auth
			.createUserWithEmailAndPassword(email, password)
			.then(async res => {
				// setUser(res.user);
				// localStorage.setItem('authUser', res.user);
				const token = await Object.entries(res.user)[5][1].b;
				await localStorage.setItem('token', token);
				setToken(token);
				const details = { username, email, picture: picture || '' };
				setUser(details);
				firestore
					.collection('users')
					.doc(auth.currentUser.uid)
					.set(details)
					.catch(err => console.log(err.message));
			})
			.catch(err => setErrors(prev => [...prev, err.message]));
	},
	login: (email, password, setErrors, setToken, setUser) => {
		auth
			.signInWithEmailAndPassword(email, password)
			.then(async res => {
				// setUser(res.user);
				// localStorage.setItem('authUser', res.user);
				const token = await Object.entries(res.user)[5][1].b;
				await localStorage.setItem('token', token);
				setToken(token);

				firestore
					.collection('users')
					.doc(auth.currentUser.uid)
					.get()
					.then(doc => {
						setUser(doc.data());
					})
					.catch(err => console.log(err.message));
			})
			.catch(err => setErrors(prev => [...prev, err.message]));
	},
	google: (setErrors, setToken, setUser) => {
		auth
			.signInWithPopup(googleProvider)
			.then(async res => {
				setUser(res.user);
				localStorage.setItem('authUser', res.user);
				const token = await Object.entries(res.user)[5][1].b;
				await localStorage.setItem('token', token);
				setToken(token);
				let docRef = firestore.collection('users').doc(auth.currentUser.uid);
				docRef
					.get()
					.then(doc => {
						if (doc.exists) return res.user;
						else {
							const { details } = addNewUserToFirestore(res.user);
							setUser(details);
						}	
					})
					.catch(err => console.log(err.message));
			})
			.catch(err => setErrors(prev => [...prev, err.message]));
	},
	github: (setErrors, setToken, setUser) => {
		auth
			.signInWithPopup(githubProvider)
			.then(async res => {
				// setUser(res.user);
				// localStorage.setItem('authUser', res.user);
				const token = await res.credential.accessToken;
				await localStorage.setItem('token', token);
				setToken(token);
				let docRef = firestore.collection('users').doc(auth.currentUser.uid);
				docRef
					.get()
					.then(doc => {
						if (doc.exists) return res.user;
						else {
							const { details } = addNewUserToFirestore(res.user);
							setUser(details);
						};
					})
					.catch(err => console.log(err.message));
			})
			.catch(err => setErrors(prev => [...prev, err.message]));
	},
	logout: (setErrors, setToken, setUser) => {
		auth
			.signOut()
			.then(res => {
				setUser(undefined);
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
