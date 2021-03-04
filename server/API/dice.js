const express = require('express');
const router = express.Router();
const Dice = require('../Dice/Dice');


/**
 * @swagger
 * tags:
 *   name: Dice
 *   description: Endpoints for throwing dice.
 */

/**
 * A Dice endpoint.
 *
 * @openapi
 * /dice:
 *   get:
 *     tags:
 *       - Dice
 *     summary: This is an example Dice endpoint. In-game dice throws should use the WebSocket method instead so that the results can be broadcast to all interested parties.
 *     responses:
 *       200:
 *         description: The dice throw result.
 */
router.get('/:sides', (req, res) => {
  const sides = req.params.sides;
  const roll = new Dice.Roll(sides, "public", "GM");
  res.json(roll);
});

module.exports = router;
