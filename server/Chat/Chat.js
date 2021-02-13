const WebSocket = require('ws');
const { Roll } = require ("../Dice/Dice");
const { errorMessage, diceRollToMessage, ChatMessage } = require("./Message");


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

  let sockets = [];
  server.on('connection', function(socket) {
    sockets.push(socket);

    // When you receive a message, send that message to every socket.
    socket.on('message', function(msg) {
      const message = JSON.parse(msg);
      console.log("message received ", message);
      switch (message.type) {
        case "dice":
          if (!validateDice(message)) {
            socket.send(JSON.stringify(errorMessage("Invalid dice")));
          } else {
            const diceRoll = new Roll(message.data.sides, message.type, "GM");
            const answer = buildChatAnswer(message, diceRollToMessage(diceRoll));
            sockets.forEach(s => {
              s.send(JSON.stringify(answer));
            })
          }
          break;
        case "story":
          sockets.forEach(s => s.send(msg));
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
  console.debug("Validating dice message", msg);
  return msg.data && msg.data.sides &&
    parseInt(msg.data.sides, 10) &&
    msg.type &&
    msg.type === "dice"
}

module.exports = {
  setUpChat
}
