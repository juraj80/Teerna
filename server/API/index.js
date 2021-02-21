const express = require('express');
const router = express.Router();

/**
 * Game Session API
 *
 * Manages Games, creating and ending sessions, creating and revoking invite links, retrieving sessions.
 */
const gameSessionRouter = require('./gameSession.js');
router.use('/game-session', gameSessionRouter);

/**
 * Dice API
 *
 * This dice API allows one to throw dices through the API.
 * Please, notice that this does not result in updating all clients in the same game.
 * For that purpose, use the WebSocket (Chat) commands.
 */
const diceRouter = require('./dice.js');
router.use('/dice', diceRouter);

module.exports = router;
