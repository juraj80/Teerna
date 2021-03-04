const doc = {
  definition: {
    openapi: "3.0.0",
    info: {
      version: "1.0.0",
      title: "Teerna API",
      description: `
## Teerna

Teerna is a Game Master tool designed to aid during RPG sessions. This
API allows for a client to interact with the Teerna Server.

Teerna is built with a Client-Server decoupled architecture.

### REST API

This document describes the server-side, built as a REST API. It is
automatically generated from the JSdoc comments directly from the server code,
thus ensuring the most up-to-date information.

### Client

Teerna Client is provided as a Web Application built with React.

Some endpoints result in WebSocket broadcast to other players. This will
be highlighted in the endpoints as appropriate.
      `
    },
    consumes: ['application/json'],
    produces: ['application/json']
  },
  apis: ['./API/index.js', './API/**/*!(.test).js']
}
module.exports = doc;
