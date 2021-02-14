const authenticate = require('./auth.js');
const bodyParser = require('body-parser');
const chat = require('./Chat/Chat.js');
const express = require('express');


const port = 8000;

// Creates the Express App
const app = express();

// The API routes
const apiRouter = require('./API');

/**
 * Serve the Client Application.
 *
 * Assumes the client is built to the "/build" directory.
 */
app.use('/', express.static('../client/build'));

// Body parser for handling POST requests.
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

/**
 * Backend API
 */
app.use('/api', authenticate, apiRouter);

// Start the HTTP server
app.listen(port, () => {
  console.log(`Teerna Server listening on port`, port, `!`)
});

// Setup the WebSocket server
chat.setUpChat();

// Export for testing purposes
module.exports = app
