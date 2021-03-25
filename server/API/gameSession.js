const express = require('express');
const router = express.Router();
const GameSession = require("../GameSession/GameSession");

const controller = {

  create: async (req, res) => {
    if (!req.user || !req.user.user_id) {
      res.status(403).send('Forbidden');
    } else {
      const gameSession = await GameSession.createSession(req.user);
      res.json(
        {
          message: 'Game created',
          gameId: gameSession.guid,
          gm: req.user.name
        }
      );
    }
  }
}

/**
 * @openapi
 * tags:
 *   name: Game Session
 *   description: Manage game sessions, creating games, inviting, uninviting, blocking and gagging players and other game session related services.
 */


/**
 * Creates a new game session, making the u1ser its Game Master.
 *
 * @openapi
 * /api/game-session:
 *   post:
 *     summary: Creates a new game for the current user.
 *     parameters:
 *      - $ref: '#/components/parameters/tokenBody'
 *     tags:
 *       - Game Session
 *     responses:
 *       "200":
 *         description: Details of the created game.
 *       "403":
 *         description: User does not have the propper permissions or is not authenticated.
 */
router.post('/', controller.create);

/**
 * Creates a valid invitation link to be sent to users
 *
 * @openapi
 * /api/game-session/invitation:
 *   post:
 *     tags:
 *       - Game Session
 *     summary: Creates an invitation for a provided email
 *     parameters:
 *      - $ref: '#/components/parameters/guidBody'
 *      - $ref: '#/components/parameters/tokenBody'
 *     responses:
 *       "200":
 *         description: A list of all pending invitations, including the newly created one.
 *       "403":
 *         description: User does not have the propper permissions or is not authenticated.
 */
router.post('/invitation', async (req, res) => {
  if (!req.user || !req.user.user_id) {
    res.status(403).send('Forbidden');
  } else {
    const guid = req.body.guid;
    const email = req.body.email;
    const gameSession = await GameSession.getSession(req.user, guid); 
    try {
      await gameSession.playerInvite(email);
      const invited = await gameSession.getPendingInvitations();
      res.json(invited);
    } catch (e) {
      console.error(e);
      res.status(500).send('Internal Server Error');
    }
  }
});

/**
 * Joins a new user through an invitation link
 *
 * The user who is joining needs to be authenticated, to provide the auth token
 * and the game id as a parameter in the URL.
 *
 * @openapi
 * /api/game-session/{guid}:
 *   get:
 *     tags:
 *       - Game Session
 *     summary: Gets details of a game a player participates or is invited to.
 *     parameters:
 *      - $ref: '#/components/parameters/guidQuery'
 *      - $ref: '#/components/parameters/tokenQuery'
 *     responses:
 *       "200":
 *         description: A message stating that the access was granted
 *       "403":
 *         description: User does not have the propper permissions or is not authenticated.
 */
router.get('/:guid', async (req, res) => {
  if (!req.user || !req.user.user_id) {
    res.status(403).send('Forbidden');
    return;
  }
  const guid = req.params.guid;
  const user = req.user;
  let gameSession;
  try {
    gameSession = await GameSession.getSession(user, guid);
  } catch {
    res.status(403).send('Forbidden');
    return;
  }
  try {
    const updated = await gameSession.updatePlayerName(user.email, user.name);
    res.json(
      {
        message: 'Access granted. You are now a player of this game',
        gameId: gameSession.guid
      });
  } catch (e) {
    console.error(e);
    res.status(500).send('Internal Server Error');
  }
});

/**
 * Requests to join a particular game.
 *
 * The user who is requesting needs to be authenticated, to provide the auth token and the game id as parameters.
 */
router.post('/:guid/join', async (req, res) => {
  if (!req.user || !req.user.user_id) {
    res.status(403).send('Forbidden');
    return;
  }
  const guid = req.params.guid;
  const user = req.user;

});


module.exports = {
  router,
  controller
}
