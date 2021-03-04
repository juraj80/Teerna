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
 * Document API
 *
 * Manages Documents
 */
const documentRouter = require('./document.js');
router.use('/document', documentRouter);

/**
 * Dice API
 *
 * This dice API allows one to throw dices through the API.
 * Please, notice that this does not result in updating all clients in the same game.
 * For that purpose, use the WebSocket (Chat) commands.
 */
const diceRouter = require('./dice.js');
router.use('/dice', diceRouter);

/**
 * Player API
 *
 * Allows for retrieving and managing information about players
 */
const playerRouter = require('./player.js');
router.use('/player', playerRouter);

/**
 * Map API
 *
 * Allows for changing and retrieving the map state.
 *
 */
const mapRouter = require('./map.js');
router.use('/map', mapRouter);

/**


/**
 *
 * This comment is used by Swagger to build the API documentation.
 *
 * Reusable parameters to be referenced throughout 
 *
 * @openapi
 * components:
 *   parameters:
 *     tokenBody:
 *       in: body
 *       name: token
 *       required: true
 *       schema:
 *         type: string
 *       description: the firebase user token. This token can be provided either as a query parameter or as a body parameter. Use it as a query parameter for GET requests and as a body parameter for POST requests.
 *     tokenQuery:
 *       in: query
 *       name: token
 *       required: true
 *       schema:
 *         type: string
 *       description: the firebase user token. This token can be provided either as a query parameter or as a body parameter. Use it as a query parameter for GET requests and as a body parameter for POST requests.
 *     guidBody:
 *       in: body 
 *       name: guid
 *       required: true
 *       schema:
 *         type: string
 *         format: uuid
 *       description: the unique identifier of the game, it was obtained when creating of joining a game.
 *     guidQuery:
 *       in: query
 *       name: guid
 *       required: true
 *       schema:
 *         type: string
 *         format: uuid
 *       description: the unique identifier of the game, it was obtained when creating of joining a game.
 */


module.exports = router;
