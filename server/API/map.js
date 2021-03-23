const express = require('express');
const router = express.Router();

/**
 * Retrieve the current state of the map of a given game.
 *
 * @openapi
 * /api/map:
 *   get:
 *     tags:
 *       - Map
 *     summary: Retrieves the current Map state
 *     parameters:
 *      - $ref: '#/components/parameters/guidBody'
 *      - $ref: '#/components/parameters/tokenBody'
 *     responses:
 *       "200":
 *         description: The current state of the map
 *       "403":
 *         description: User does not have the propper permissions or is not authenticated.
 */
router.get('/', async (req, res) => {
  res.send({message: 'TODO: this endpoint will return a success message'});
});


/**
 * @openapi
 * tags:
 *   name: Map
 *   description: Act on the map or get its state
 *
 */


/**
 * Creates a new map object to be broadcasted to all players.
 *
 * @openapi
 * /api/map:
 *   post:
 *     summary: Creates a new Map State and broadcasts it
 *     parameters:
 *       - $ref: '#/components/parameters/tokenBody'
 *       - $ref: '#/components/parameters/guidBody'
 *     tags:
 *       - Map
 *     responses:
 *       "200":
 *         description: Details of the created map.
 *       "403":
 *         description: User does not have the propper permissions or is not authenticated.
 *
 */
router.post('/', async (req, res) => {
  res.send({message: 'TODO: this endpoint will return a success message'});
});

/**
 * Updates a map's current state.
 *
 * @openapi
 * /api/map:
 *   put:
 *     tags:
 *       - Map
 *     summary: Updates a current Map state and broadcast the update.
 *     parameters:
 *      - $ref: '#/components/parameters/guidBody'
 *      - $ref: '#/components/parameters/tokenBody'
 *     responses:
 *       "200":
 *         description: The updated state of the map
 *       "403":
 *         description: User does not have the propper permissions or is not authenticated.
 */
router.put('/', async (req, res) => {
  res.send({message: 'TODO: this endpoint will return a success message'});
});

module.exports = router;
