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
  apiKey: "AIzaSyBQNSwu-qJ9SqCH_jSV7GpCTBmNTjaGlck",
  authDomain: "agile-teerna.firebaseapp.com",
  projectId: "agile-teerna",
  storageBucket: "agile-teerna.appspot.com",
  messagingSenderId: "196688538962",
  appId: "1:196688538962:web:ad5931f45b1d192048de8b",
  measurementId: "G-9BBM4JGWZT"
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
