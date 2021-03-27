const GameSession = require("./GameSession/GameSession");

/**
 * A Game Session middleware to ease access to the gameSession class.
 *
 * Gets an instance of the GameSession class with the provided game if the current user is a member of the game.
 *
 *
 * this solution was heavily inspired by:
 * https://www.codementor.io/@victornwaiwu/using-firebase-as-an-authenticating-middleware-in-express-js-5z435fvaz
 * further documentation from:
 * https://firebase.google.com/docs/auth/admin/verify-id-tokens
 */
async function session(req, res, next) {
  if (!req.user || !req.user.user_id) {
    next();
  } else {
    const guid = req.body.guid || req.query.guid || req.params.guid;
    if (!guid) {
      next();
    } else {
      const gameSession = GameSession.getSession(req.user, guid);
      req.gameSession = gameSession;
      next();
    }
  }
}

module.exports = session;
