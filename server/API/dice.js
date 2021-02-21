const express = require('express');
const router = express.Router();
const Dice = require('../Dice/Dice');
/**
 * A Dice endpoint.
 *
 * This is an example Dice endpoint.
 * In-game dice throws should use the WebSocket method instead so that the results can be broadcast to all interested parties.
 */
router.get('/:sides', (req, res) => {
  const sides = req.params.sides;
  const roll = new Dice.Roll(sides, "public", "GM");
  res.json(roll);
});

module.exports = router;
