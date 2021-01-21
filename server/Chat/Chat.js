
function setUpChat() {
  const WebSocket = require('ws');
  const server = new WebSocket.Server({
    port: 8888
  });

  let sockets = [];
  server.on('connection', function(socket) {
    console.log(socket);
    sockets.push(socket);

    // When you receive a message, send that message to every socket.
    socket.on('message', function(msg) {
      const message = JSON.parse(msg);
      const types = ['story', 'background'];
      if (types.includes(message.type) && message.author == 'GM') {
        sockets.forEach(s => s.send(msg));
      } else {
        console.log('player message', message);
      }
    });

    // When a socket closes, or disconnects, remove it from the array.
    socket.on('close', function() {
      sockets = sockets.filter(s => s !== socket);
    });
  });
}

module.exports = {
  setUpChat
}
