const fireBaseAdmin = require('firebase-admin');

/** 
 * @typedef {
 * name: string,
 * picture: string,
 * iss: string,
 * aud: string,
 * auth_time: number,
 * user_id: string,
 * sub: string,
 * iat: number,
 * exp: number,
 * email: string,
 * email_verified: boolean,
 * uid: string
 * } User
 */

// Firebase configuration. TODO: these values shouldn't be visible in GitHub. Should use environment variables instead. 
const config = {
  apiKey: 'AIzaSyC_A-0aI3bvDES4juu6yaz2Ek9znNzKpJA',
  authDomain: 'agile-project-fc4de.firebaseapp.com',
  projectId: 'agile-project-fc4de',
  storageBucket: 'agile-project-fc4de.appspot.com',
  messagingSenderId: '593366118897',
  appId: '1:593366118897:web:b85a5891ff06fd60bf9450',
  measurementId: 'G-641H7XG0MM',
};

// Initializ Firebase
fireBaseAdmin.initializeApp(config);

/**
 * A Firebase JWT token validation middleware
 *
 * Provides a middleware that authenticates the user, given a tokenId
 *
 * this solution was heavily inspired by:
 * https://www.codementor.io/@victornwaiwu/using-firebase-as-an-authenticating-middleware-in-express-js-5z435fvaz
 * further documentation from:
 * https://firebase.google.com/docs/auth/admin/verify-id-tokens
 */
async function authenticate(req, res, next) {
  // accepts the token in the body, query or url param.
  const token = req.body.token || req.query.token || req.params.token;
  if (!token) {
    next();
  } else {
    const auth = fireBaseAdmin.auth();
    const decoded = await auth.verifyIdToken(token);
    /**
     * @type User
     */
    req.user = decoded;
    next();
  }
}


module.exports = authenticate;
