const express = require('express');
const router = express.Router();
const GameSession = require("../GameSession/GameSession");
const authenticate = require("../auth.js");


/**
 * @swagger
 * tags:
 *   name: Game Session
 *   description: Manage game sessions, creating games, inviting, uninviting, blocking and gagging players and other game session related services.
 */


/**
 * Creates a new game session, making the user its Game Master.
 *
 * @openapi
 * /game-session:
 *   post:
 *     summary: Creates a new game for the current user.
 *     responses:
 *       "200":
 *         description: Details of the created game.
 *       "403":
 *         description: User does not have the propper permissions or is not authenticated.
 */
router.post('/', authenticate, async (req, res) => {
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
});

/**
 * Creates a valid invitation link to be sent to users
 *
 * @openapi
 * /game-session/invitation:
 *   post:
 *     summary: Creates an invitation for a provided email
 *     responses:
 *       "200":
 *         description: A list of all pending invitations, including the newly created one.
 *       "403":
 *         description: User does not have the propper permissions or is not authenticated.
 */
router.post('/invitation', authenticate, async (req, res) => {
  if (!req.user || !req.user.user_id) {
    res.status(403).send('Forbidden');
  } else {
    const guid = req.body.guid;
    const email = req.body.email;
    const gameSession = await GameSession.getSession(guid); 
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
 * /game-session/{guid}:
 *   get:
 *     summary: Gets details of a game a player participates or is invited to.
 *     responses:
 *       "200":
 *         description: A message stating that the access was granted
 *       "403":
 *         description: User does not have the propper permissions or is not authenticated.
 */
router.get('/:guid', authenticate, async (req, res) => {
  if (!req.user || !req.user.user_id) {
    res.status(403).send('Forbidden');
    return;
  }
  const guid = req.params.guid;
  const user = req.user;
  const gameSession = await GameSession.getSession(guid);
  const invited = await gameSession.getPlayerByEmail(user.email);
  if (!invited.length) {
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


module.exports = router;
