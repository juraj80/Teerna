
export default class ChatMessage {

  /**
   * Builds a message object
   *
   * @param {string} message the message text.
   * @param {string} author of the message.
   * @param {string} type type of the message.
   * @param {string} a string representation of the time.
   */
  constructor(message, author, type, time = null) {
    this.message = message;
    this.author = author;
    this.type = type;
    this.time = time ? new Date(time): new Date();
  }
}