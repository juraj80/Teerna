const express = require('express');
const chat = require('./Chat/Chat.js');
const Dice = require('./Dice/Dice');

const port = 8000;

const app = express();

/**
 * Serve the Client Application.
 */
app.use('/', express.static('../client/build'));

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
