
export function createMessage(message) {
  const regularMessage =  new ChatMessage(message, "GM", "story");
  // regular message
  if (!isSpecialMessage(message)) {
    return regularMessage;
  } else {
    // special message
    return specialMessage(regularMessage);
  }
}


export function isSpecialMessage(message) {
  return message.match(/^\/\w/);
}

export function specialMessageType(message) {
  if (message.match(/^\/d(2|4|6|8|10|12|20)/)) {
    return "dice";
  }
  return "story";
}

const parser = {
  dice(message) {
    const match = message.match(/^\/d(?<sides>\d+)/);
    const sides = match.groups.sides;
    return {
      sides,
      type: 'dice'
    }
  },
  story(message) {
    return message;
  }
}

export function specialMessage(message) {
  const type = specialMessageType(message.message);
  return {
    ...message,
    ...parser[type](message.message)
  }
}


export class ChatMessage {
  /**
   * Builds a message object
   *
   * @param {string} message the message text.
   * @param {string} author of the message.
   * @param {string} type type of the message.
   * @param {string|null} time a string representation of the time.
   */
  constructor(message, author, type, time = null) {
      this.message = message;
      this.author = author;
      this.type = type;
      this.time = time ? new Date(time): new Date();
      this.id = this.time.getTime() + Math.random();
    }
}