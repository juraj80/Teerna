const {authenticateHTTP} = require('./auth.js');
const bodyParser = require('body-parser');

const fileSystem = require('./helpers/fileSystem.js')
const chat = require('./Chat/Chat.js');
const express = require('express');
const Dice = require('./Dice/Dice');
const GameSession = require("./GameSession/GameSession");
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerOptions = require('./swagger.js');


const fileUpload = require('express-fileupload');
const fs = require('fs');
const path = require('path');
const decompress = require('decompress');
const zipper = require('zip-local');
const Moment = require('moment');

const osxfolder = `${__dirname}/Uploads/__MACOSX`;

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

/**
 * Body parser for handling POST requests.
 */
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(fileUpload());

const gameFile = 'game.zip';

app.use(express.static('Uploads'));


/**
 * Create API documentation
 */
const specs = swaggerJsDoc(swaggerOptions);
app.use('/docs', swaggerUi.serve);
app.get(
  "/docs",
  swaggerUi.setup(specs, {
    explorer: true
  })
);
/**
 * Backend API
 */
const port = process.env.PORT || 5000;
app.use('/api', authenticateHTTP, apiRouter);

// Start the HTTP server
app.listen(port, () => {
  console.log(`Teerna Server listening on port`, port, `!`)
});


// Setup the WebSocket server
chat.setUpChat();

module.exports = app;
