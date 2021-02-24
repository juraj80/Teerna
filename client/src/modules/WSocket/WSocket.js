import firebase from 'firebase';
import { createMessage } from '../Chat';

export const onAuthStateChange = callback => {
  return firebase.auth().onAuthStateChanged(user => {
    if (user) {
      console.log("Full user", user);
      firebase.auth().currentUser.getIdToken(false).then(function(idToken) {
        const { uid, email, displayName } = user;
        callback({ loggedIn: true, id: uid, email, username: displayName, idToken});
      }).catch(function(error) {
        console.error(error);
      });
    } else {
      callback({ loggedIn: false });
    }
  });
};

const config = {
  ws: {
    domain: 'localhost',
    port: 8888,
  },
};

/**
 * This class configures the Web Socket connections and allows for several different consumers to be notified when WS events occurs.
 *
 * This is a singleton and should not be instantiated directly, therefore, it is not exported.
 */
class WSConnection {
  constructor(onOpen = [], onMessage = [], onClose = []) {
    this.ws = new WebSocket(`ws://${config.ws.domain}:${config.ws.port}`);
    this.ws.onopen = this.onOpen.bind(this);
    this.ws.onmessage = this.onMessage.bind(this);
    this.ws.onclose = this.onClose.bind(this);
    this.subscribers = {
      open: onOpen,
      message: onMessage,
      close: onClose,
    };
    onAuthStateChange(u => (this.user = u));
  }

  onOpen(msg) {
    this.subscribers.open.forEach(f => f(msg));
  }

  onMessage(msg) {
    if (msg.data !== undefined) this.subscribers.message.forEach(f => f(msg));
  }

  onClose(msg) {
    this.subscribers.close.forEach(f => f(msg));
  }

  /**
   * Subscribe a function the WebSocket events.
   *
   * @param {string} type
   * @param {Function} callback
   */
  subscribe(type, callback) {
    if (Object.keys(this.subscribers).includes(type)) {
      if (!this.subscribers[type].includes(callback)) {
        this.subscribers[type].push(callback);
      }
    }
  }

  /**
   * Sends a text message with the WebSockets Client.
   *
   * Message can be a string or an object.
   * If message is an object, a regular message is created and the attributes of the object are used to overwrite the attributes of the regular message.
   * If message is a string, a message is built with that string.
   * The author is automatically added to the message.
   * The id is automatically added to the message - You can use the id to track answers to that particular message.
   *
   * @param {string|Object} text: simple message to be sent via WS.
   */
  sendMessage(text) {
    const message = createMessage(text, this.user);
    this.ws.send(JSON.stringify(message));
    return message;
  }

  /**
   * Returns either open or close for the WebSocket connection status.
   *
   * Open means messages can be sent.
   * Closed means messages cannot be sent.
   *
   * @returns {"open"|"closed"}
   */
  getStatus() {
    return this.ws.readyState === this.ws.OPEN ? 'open' : 'closed';
  }
}

let conn;

/**
 *
 * @param {Array<Function>} onOpen
 * @param {Array<Function>} onMessage
 * @param {Array<Function>} onClose
 * @returns {WSConnection}
 */
export function connection(onOpen, onMessage, onClose) {
  if (!conn) {
    conn = new WSConnection(onOpen, onMessage, onClose);
  } else {
    onOpen.forEach( f => conn.subscribe('open', f));
    onMessage.forEach( f => conn.subscribe('message', f));
    onClose.forEach( f => conn.subscribe('close', f));
  }
  return conn;
}
