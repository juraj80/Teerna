const WebSocket = require('ws');
const { Roll } = require ("../Dice/Dice");
const { errorMessage, diceRollToMessage, ChatMessage } = require("./Message");
const { authenticateWS } = require("../auth");
const GameSession = require("../GameSession/GameSession");

let sockets = [];

/**
 * Builds a chat answer.
 *
 * Chat answers need to use the same id as the request so that the client can
 * identify a response to the message sent.
 *
 * @param message the Message Object lacking answer attributes.
 * @param answer the Answer Object, which is a message object plus answer attributes.
 * @returns {*}
 */
function buildChatAnswer(message, answer) {
  answer.id = message.id;
  return answer;
}

/**
 * Sends a message to all sockets connected to the server.
 *
 * If message has a guid field sends the message only to those sockets that belong to this guid..
 * @param {Object} message to be sent
 */
function broadcast(message) {
  sockets
    .filter(s => s.teernaGuid === message.guid)
    .forEach(s => {
      s.send(JSON.stringify(message));
    })
}

function handleDiceMessage(socket, sockets, message) {
  if (!validateDice(message)) {
    socket.send(JSON.stringify(errorMessage("Invalid dice")));
  } else {
    const diceRoll = new Roll(message.data.sides, message.type, "GM");
    const answer = buildChatAnswer(message, diceRollToMessage(diceRoll));
    broadcast(answer);
  }
}

/**
 * Verifies that a chat message is authenticated.
 *
 * @param {Object} message: the message to be authenticated.
 * @returns {false|Object} the authenticated author of the message or false, if the authentication failed.
 */
function authenticate(message) {
}

/**
 * Prepares the Chat.
 *
 * Creates the WebSocket server and implements listeners.
 */
function setUpChat() {
  const wsPort = 8888;
  const server = new WebSocket.Server({
    port: wsPort
  });
  console.log("Teerna WebSocket Server listening on port", wsPort);

  server.on('connection', function(socket) {
    sockets.push(socket);

    // When you receive a message, send that message to every socket.
    socket.on('message', async function(msg) {
      const message = JSON.parse(msg);
      const author = authenticateWS(message);
      let game = null;
      message.authenticated = !!author;
      if (message.authenticated && message.guid && message.guid.length == 36) {
        game = GameSession.getSession(author, message.guid); 
        socket.teernaGuid = message.guid; // once an authenticated game message is received mark the socket with the guid
      }
      console.log("This was received via WS", message);
      switch (message.type) {
        case "dice":
          handleDiceMessage(socket, message);
          break;
        case "story":
          broadcast(message);
          break;
        case "typing":
          sockets.forEach(s => {if (s!==socket) s.send(msg)});
          break;
        default:
          socket.send(JSON.stringify(errorMessage("Invalid message type " + message.type)));
      }
    });

    // When a socket closes, or disconnects, remove it from the array.
    socket.on('close', function() {
      console.log("Connection closed.")
      sockets = sockets.filter(s => s !== socket);
    });

    //stop listening message
    socket.off('message', (e) => {console.log("Off message",  e)});

    socket.on('disconnect', function() {
      socket.removeAllListeners();
    });

  });
}

function validateDice(msg) {
  return msg.data && msg.data.sides &&
    parseInt(msg.data.sides, 10) &&
    msg.type &&
    msg.type === "dice"
}

module.exports = {
  setUpChat,
  broadcast
}
