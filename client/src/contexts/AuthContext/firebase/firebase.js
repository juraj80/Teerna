import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/app';

const firebaseConfig = {
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_BASEURL,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGEBUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_APP_ID,
	measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

// initialize
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.auth();

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.addScope('https://www.googleapis.com/auth/userinfo.profile');
const githubProvider = new firebase.auth.GithubAuthProvider();

export { googleProvider, githubProvider };
export default firebaseConfig;
