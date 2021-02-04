import {createMessage} from "../Chat/Message";
import {onAuthStateChange} from "../../contexts";

const config = {
  ws: {
    domain: 'localhost',
    port: 8888
  }
}

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
      close: onClose
    }
    onAuthStateChange((u) => this.user = u);
  }

  onOpen(msg) {
    this.subscribers.open.forEach(f => f(msg));
  }

  onMessage(msg) {
    console.log("message received")
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
      console.log("adding", type, "into", this.subscribers);
      if (!this.subscribers[type].includes(callback)) {
        this.subscribers[type].push(callback);
      }
    }
  }

  /**
   * Sends a text message with the WebSockets Client.
   *
   * @param {string} text: simple message to be sent via WS.
   */
  sendMessage(text) {
    const message = createMessage(text, this.user);
    this.ws.send(
      JSON.stringify(message)
    );
    return message;
  }

  getStatus() {
    return this.ws.readyState === this.ws.OPEN ? 'open': 'closed';
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