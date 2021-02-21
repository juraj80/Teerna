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

const googleProvider = new firebase.auth.GoogleAuthProvider();
const githubProvider = new firebase.auth.GithubAuthProvider();

//const defaultUser = { loggedIn: false, id: '', username: '', email: '' };
// const [user, setUser] = useState({ loggedIn: false });

export const onAuthStateChange = callback => {
  return firebase.auth().onAuthStateChanged(user => {
    if (user) {
      console.log("Full user", user);
      firebase.auth().currentUser.getIdToken(false).then(function(idToken) {
        const { uid, email, displayName } = user;
        callback({ loggedIn: true, id: uid, email, username: displayName, idToken});
        return;
      }).catch(function(error) {
        console.error(error);
      });
    } else {
      callback({ loggedIn: false });
    }
  });
};

export const googleLogin = () => {
	return new Promise((resolve, reject) => {
		firebase
			.auth()
			.signInWithPopup(googleProvider)
			.then(() => resolve())
			.catch(error => reject(error));
	});
};

export const githubLogin = () => {
	return new Promise((resolve, reject) => {
		firebase
			.auth()
			.signInWithPopup(githubProvider)
			.then(() => resolve())
			.catch(error => reject(error));
	});
};

export const logout = () => {
	firebase.auth().signOut();
};
