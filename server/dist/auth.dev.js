"use strict";

var fireBaseAdmin = require('firebase-admin');

var serviceAcc = require("./".concat(process.env.GOOGLE_APPLICATION_CREDENTIALS));
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
// Initialize Firebase


fireBaseAdmin.initializeApp({
  credential: fireBaseAdmin.credential.cert(serviceAcc),
  databaseURL: process.env.REACT_APP_BASEURL
});
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

function authenticate(req, res, next) {
  var token, auth, decoded;
  return regeneratorRuntime.async(function authenticate$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // accepts the token in the body, query or url param.
          token = req.body.token || req.query.token || req.params.token;

          if (token) {
            _context.next = 5;
            break;
          }

          next();
          _context.next = 11;
          break;

        case 5:
          auth = fireBaseAdmin.auth();
          _context.next = 8;
          return regeneratorRuntime.awrap(auth.verifyIdToken(token));

        case 8:
          decoded = _context.sent;

          /**
           * @type User
           */
          req.user = decoded;
          next();

        case 11:
        case "end":
          return _context.stop();
      }
    }
  });
}

module.exports = authenticate;