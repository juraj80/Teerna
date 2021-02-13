const express = require('express');
const router = express.Router();
const GameSession = require("../GameSession/GameSession");



/**
 * Creates a new game session, making the user its Game Master.
 */
router.post('', async (req, res) => {
  const gm = req.body.user;
  const gameSession = await GameSession.createSession(gm);
  res.json(
    {
      message: 'Game created',
      test: "lets see",
      gameId: gameSession.sessionId
    }
  );
});

/**
 * Creates a valid invitation link to be sent to users
 */
router.post('/invitation', async (req, res) => {
  const guid = req.body.guid;
});

/**
 * Joins a new user throug an invitation link
 */
router.get('/:guid/:invitation', async (req, res) => {
  const credentials = {
    guid: req.params.guid
  }
  const gameSession = await GameSession.createSession(credentials);
  res.json(
    {
      message: 'Game loaded',
      test: "lets see",
      gameId: gameSession.sessionId
    }
  );
});


module.exports = router;
