const express = require('express');
const router = express.Router();
const Dice = require('./Dice/Dice');
const GameSession = require("./GameSession/GameSession");

/**
 * A Dice endpoint.
 *
 * This is an example Dice endpoint.
 * In-game dice throws should use the WebSocket method instead so that the results can be broadcast to all interested parties.
 */
router.get('/dice/:sides', (req, res) => {
  const sides = req.params.sides;
  const roll = new Dice.Roll(sides, "public", "GM");
  res.json(roll);
});


/**
 * Creates a new game session, making the user its Game Master.
 */
router.post('/game-session', async (req, res) => {
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

module.exports = router;