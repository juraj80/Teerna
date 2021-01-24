import { useState } from 'react';
import AuthContext from './AuthContext';
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyC_A-0aI3bvDES4juu6yaz2Ek9znNzKpJA',
	authDomain: 'agile-project-fc4de.firebaseapp.com',
	projectId: 'agile-project-fc4de',
	storageBucket: 'agile-project-fc4de.appspot.com',
	messagingSenderId: '593366118897',
	appId: '1:593366118897:web:b85a5891ff06fd60bf9450',
	measurementId: 'G-641H7XG0MM',
};

firebase.initializeApp(firebaseConfig);

export default function AuthProvider({ children }) {
	const defaultUser = { loggedIn: false, id: '', username: '', email: '' };
	const [user, setUser] = useState(defaultUser);

	const onAuthStateChange = () => {
		return firebase.auth().onAuthStateChanged(({ id, email, username }) => {
			id && setUser({ loggedIn: true, id, email, username });
			!id && setUser({ loggedIn: false });
		});
	};

	const googleLogin = () => {
		return new Promise((resolve, reject) => {
			firebase
				.auth()
				.signInWithPopup(googleLogin)
				.then(() => resolve())
				.catch(error => reject(error));
		});
	};

	const githubLogin = () => {
		return new Promise((resolve, reject) => {
			firebase
				.auth()
				.signInWithPopup(githubLogin)
				.then(() => resolve())
				.catch(error => reject(error));
		});
	};

	const logout = () => {
		firebase.auth().signOut();
	};

	return (
		<AuthContext.Provider
			value={{ user, googleLogin, githubLogin, logout, onAuthStateChange }}
		>
			{children}
		</AuthContext.Provider>
	);
}
