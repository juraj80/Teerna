const express = require('express');
const bodyParser = require('body-parser');

const chat = require('./Chat/Chat.js');
const Dice = require('./Dice/Dice');
const GameSession = require("./GameSession/GameSession");

const port = 8000;

const app = express();

/**
 * Serve the Client Application.
 */
app.use('/', express.static('../client/build'));

/**
 * Body parser for handling POST requests.
 */
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

/**
 * Creates a new game session, making the user its Game Master.
 */
app.post('/game-session', (req, res) => {
  const gm = req.body.user;
  const gameSession = GameSession.createSession(gm);
  res.json(
    {
      message: 'Game created',
      gameId: gameSession.sessionId
    }
  );
});

/**
 * A Dice endpoint.
 */
app.get('/dice/:sides', (req, res) => {
    const sides = req.params.sides;
    const roll = new Dice.Roll(sides, "public", "GM");
    res.json(roll);
});


app.listen(port, () => {
  console.log(`Teerna Server listening on port`, port, `!`)
});
chat.setUpChat();
