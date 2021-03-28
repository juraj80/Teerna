const express = require('express');
const router = express.Router();
const authenticate = require("../auth.js");
const session = require("../session.js");
const Player = require('../Player/Player.js');


function isThisAuthenticatedSession(user, session) {
  return user &&
    user.user_id &&
    session &&
    session.ready;
}

/**
 * @openapi
 * tags:
 *   name: Player
 *   description: Manage players within the context of a particular game
 */

/**
 * Lists the game documents
 *
 * @openapi
 * /api/player/list:
 *   get:
 *     tags:
 *       - Player
 *     summary: Lists the players in the current game and their status
 *     parameters:
 *       - $ref: '#/components/parameters/guidBody'
 *       - $ref: '#/components/parameters/tokenBody'
 *     responses:
 *       200:
 *         description: the list of players and their status.
 */
router.get('/list', authenticate, session, (req, res) => {
  if (!isThisAuthenticatedSession(req.user, req.session)) {
    res.status(403).send('Forbidden');
  } else {
    res.send({message: 'TODO: this endpoint will show the list of players.'});
  }
});

/**
 * @openapi
 * /api/player/gag:
 *   post:
 *     tags:
 *       - Player
 *     summary: Gag a player. (For GM only)
 *     parameters:
 *       - in: body
 *         name: player
 *         required: true
 *         schema:
 *           type: string
 *       - $ref: '#/components/parameters/guidBody'
 *       - $ref: '#/components/parameters/tokenBody'
 *     responses:
 *       200:
 *         description: the list of players and their status
 */
router.post('/gag', authenticate, (req, res) => {
  if (!isThisAuthenticatedSession(req.user, req.session)) {
    res.status(403).send('Forbidden');
    return;
  }
  res.send({message: 'TODO: this endpoint will show the list of players.'});
});

/**
 * @openapi
 * /api/player/ungag:
 *   post:
 *     tags:
 *       - Player
 *     summary: Ungag a player. (For GM only)
 *     parameters:
 *       - in: body
 *         name: player
 *         schema:
 *           required: true
 *           schema:
 *             type: string
 *       - $ref: '#/components/parameters/guidBody'
 *       - $ref: '#/components/parameters/tokenBody'
 *     responses:
 *       200:
 *         description: An OK message
 *       403:
 *         description: Forbidden
 */
router.post('/ungag', authenticate, (req, res) => {
  res.send({message: 'TODO: this endpoint will return a success message'});
});


/**
 * @openapi
 * /api/player/block:
 *   post:
 *     tags:
 *       - Player
 *     summary: Gag a player. (For GM only)
 *     parameters:
 *       - in: body
 *         name: player
 *         schema:
 *           required: true
 *           schema:
 *             type: string
 *       - $ref: '#/components/parameters/guidBody'
 *       - $ref: '#/components/parameters/tokenBody'
 *     responses:
 *       200:
 *         description: the list of players and their status
 */
router.post('/block', authenticate, (req, res) => {
  res.send({message: 'TODO: this endpoint will show the list of players.'});
});

/**
 * @openapi
 * /api/player/unblock:
 *   post:
 *     tags:
 *       - Player
 *     summary: Unblock a player. (For GM only)
 *     parameters:
 *       - in: body
 *         name: player
 *         schema:
 *           required: true
 *           schema:
 *             type: string
 *       - $ref: '#/components/parameters/guidBody'
 *       - $ref: '#/components/parameters/tokenBody'
 *     responses:
 *       200:
 *         description: An OK message
 *       403:
 *         description: Forbidden
 */
router.post('/unblock', authenticate, (req, res) => {
  res.send({message: 'TODO: this endpoint will return a success message'});
});


module.exports = router;
