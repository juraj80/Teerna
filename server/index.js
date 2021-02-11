const express = require('express');
const bodyParser = require('body-parser');

const chat = require('./Chat/Chat.js');

const port = 8000;

const app = express();

const apiRouter = require('./api.js');

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


/**
 * Backend API
 */
app.use('/api', apiRouter);


app.listen(port, () => {
  console.log(`Teerna Server listening on port`, port, `!`)
});

chat.setUpChat();
