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

// Firebase configuration.
const config = {
  apiKey: process.env['REACT_APP_API_KEY'],
  authDomain: process.env['REACT_APP_AUTH_DOMAIN'],
  projectId: process.env['REACT_APP_PROJECT_ID'],
  storageBucket: process.env['REACT_APP_STORAGEBUCKET'],
  messagingSenderId: process.env['REACT_APP_MESSAGING_SENDER_ID'],
  appId: process.env['REACT_APP_APP_ID'],
  measurementId: process.env['REACT_APP_MESSAGING_SENDER_ID']
};


// Initializ Firebase
const firebaseApp = !fireBaseAdmin.apps.length ? fireBaseAdmin.initializeApp(config): fireBaseAdmin.app();

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
async function authenticateHTTP(req, res, next) {
  // accepts the token in the body, query or url param.
  const token = req.body.token || req.query.token || req.params.token;
  if (!token) {
    next();
  } else {
    req.user = await authenticateToken(token);
    console.log('AUTHENTICATED', req.user);
    next();
  }
}

/**
 * Authenticate a Chat Message, received through WebSocket.
 *
 * @param {Object} message: the message to be authenticated.
 * @returns {Promise<Object>} the authenticated user data.
 */
async function authenticateWS(message) {
  const token = message?.author?.idToken;
  if (!token) {
    return false;
  } else {
    return await authenticateToken(token);
  }
}

/**
 * Authenticate a token using firebase
 *
 * @param {string} token: the firebase token to be authenticated
 * @returns {Object} the authenticated user data.
 */
async function authenticateToken(token) {
  const auth = firebaseApp.auth();
  try {
    const decoded = await auth.verifyIdToken(token);
    console.log(decoded);
    return decoded;
  } catch (e) {
    console.log(e);
    return null;
  }
}


module.exports = {
  authenticateHTTP,
  authenticateWS
};
