import Chat from "./Chat";


export function createMessage(message, author) {
  let regularMessage;
  if (typeof message === 'string') {
    regularMessage =  new ChatMessage(message, author, "story");
    // regular message
    const cmd = Command.fromText(message);
    if (cmd) {
      regularMessage = {
        ...new ChatMessage(message, author, 'command'),
        ...cmd
      }
    }
  } else {
    regularMessage = {
      ... new ChatMessage('', author, "story"),
      ... message
    }
  }
  return regularMessage;
}

/**
 * Manages commands available for the Chat.
 *
 * Provides a register, autocomplete and parse features.
 */
export class Command {
  static pattern = /^\/(?<qty>\d+\s*)?(?<cmd>\w[\w\d]*)(?<arg>(\s+[\w\d]+)*)/;

  static commands = [];

  /**
   * Registers a new command under the given name.
   *
   * @param {string} name of the command. This name is used in the chat as /name to execute the command
   * @param {string} type of the command. This will influence the way the server interprets the command
   * @param {string} help to be displayed to the user about this particular command
   * @param {Object} data to be added to the command. These attributes are static. Dinamic attributes are added as arguments, one for each space-separated word after the command.
   */
  static register(name, type, help = "", data = {}) {
    Command.commands.push( {name, type, help, data} );
  }

  /**
   * Returns a registered command name and type.
   * @param name
   * @returns {{name: string, type: string}} the registered command.
   */
  static isRegistered(name) {
    return Command.commands.find(c => c.name === name);
  }

  /**
   * Returns a list of at most five commands that contain the partial.
   *
   * @param partial
   * @returns {T[]}
   */
  static autocomplete(partial) {
    const p = partial.replace(/^\//, '');
    return Command.commands
      .filter( (c) => c.name.includes(p) )
      .slice(0, 5)
      .map(c => c.name);
  }

  /**
   * Chat parser converts text into an object based in a simple language to be used in the chat.
   *
   * The language is as follows:
   * A slash ("/") is used to start a command and a new line ends it.
   * The slash may be followed by a number or a command with one or more letters.
   * The command can receive space separated parameters.
   */
  static parse(text) {
    const match = text.match(Command.pattern);
    try {
      return {
        // the quantity, or 1 if not available
        quantity: match.groups.qty !== undefined ? Number(match.groups.qty): 1,
        // the command, it is always available
        name: match.groups.cmd,
        // the arguments separated by 1 or more spaces
        // split the string using spaces
        // no empty arguments
        args: match.groups.arg !== undefined ? match.groups.arg
          .split(/\s+/)
          .filter(e => e !== ''): [],
        // the full message is made available in the result
        message: text,
        // errors are displayed in the result
        get error() {
          return Command.findErrors(text);
        }
      }
    } catch (e) {
      if (e instanceof TypeError && e.message === "Cannot read property 'groups' of null") {
        return {
          get error() {
            return Command.findErrors(text);
          }
        }
      }
    }
  }

  static fromText(text) {
    const parsed = Command.parse(text);
    if (!parsed.error) {
      return new Command(parsed.quantity, parsed.name, parsed.args);
    } else {
      return undefined;
    }
  }

  static findErrors(command) {
    const errors = {
      'Should not separate the slash and the command.': /^\/\s+[\w\d]/ ,
      'Slash should be in the start of the line.': /^[^\/]/,
      'Command arguments can only use alphanumeric characters.': /^\/(\d+\s*)?\w[\w\d]*(\s+[\d\w]*)*[^\d\w\s].*$/
    }
    for (let [k,v] of Object.entries(errors)) {
      if (command.match(v)) {
        return k
      }
    }
  }



  constructor(quantity, name, args) {
    const registered = Command.isRegistered(name);
    if (!Command.isRegistered(name)) {
      throw new TypeError("Only registered commands can be instantiated.");
    }
    this.type = registered.type;
    this.quantity = quantity;
    this.args = args;
    this.name = name;
    this.data = registered.data;
  }


}


export class ChatMessage {
  /**
   * Builds a message object
   *
   * @param {string} message the message text.
   * @param {user} author of the message.
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
