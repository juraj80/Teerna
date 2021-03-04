import React, { Component } from 'react';
import {ChatMessage, createMessage} from '../../modules/Chat/Message';
import './Chat.css';
import {DiceContext} from "../../contexts/DiceContext";
import {timeAgo} from "../../modules/Time/Time";
import {connection} from "../../modules/WSocket/WSocket"
import * as Commands from "../../modules/Chat/Commands.js";

class Chat extends Component {
  static contextType = DiceContext;

  // The number of messages to display in the chat
  historyLimit = 100;

  // The timespan of the "typing" message
  typingTimespan = 2000;

  state = {
    disabled: true,
    messages: [],
    newMessage: "",
    diceHistory: [],
    amITyping: false,
    whoIsTyping: []
  }

  constructor(props) {
    super(props);
    this.ws = connection(
      [],
      [(e) => this.onMessage(e)],
      []
      );
  }

  componentDidMount() {
    // Bind the WebSockets events when the component is already mounted
    this.diceBag = this.context;
    this.diceBag.subscribe(this.changeHistory.bind(this));
    Commands.allCommands();

  }

  changeHistory(history) {
    this.setState({diceHistory: history});
  }

  /**
   * Hook executed a new message arrives from the WS.
   *
   * @param {MessageEvent} msg received
   */
  onMessage(msg) {
    let message = JSON.parse(msg.data);
    message = new ChatMessage(message.message, message.author, message.type, message.time);
    if (["story", "dice", "error"].includes(message.type)) {
      this.addChatStory(message);
    } else if (message.type === 'typing') {
      this.addWhoIsTyping(message);
    }
  }

  addChatStory(message) {
    const added = this.state.messages.concat([message])
    if (added.length > this.historyLimit) {
      added.splice(0, added.length - this.historyLimit);
    }
    this.setState({messages: added});
  }

  addWhoIsTyping(message) {
    if (this.state.whoIsTyping.every(w => w.author && w.author.username !== message.author.username)) {
      this.setState({whoIsTyping: this.state.whoIsTyping.concat(message.author)})
      setTimeout(() => this.setState({whoIsTyping: this.state.whoIsTyping.filter(w => w !==message.author)}), this.typingTimespan)
    }
  }

  /**
   * Stores the value of the message input in the component state
   * @param {Event} event that changed the value
   */
  handleMessageInput(event) {
    this.setState({newMessage: event.target.value});
  }

  /**
   * Sends a text message with the WebSockets Client.
   */
  sendMessage() {
    this.ws.sendMessage(this.state.newMessage);
    this.setState({newMessage: ""});
  }

  /**
   * Handles the user input in the chat input box.
   *
   * @param {KeyboardEvent} e: the keyPress event
   * @returns {function(*): void}
   */
  handleKeyPress(e) {
    if (e.key === "Enter") {
      this.sendMessage();
    } else {
      this.sendTyping();
    }
  }

  /**
   * Sends a typing message at most once every two seconds.
   */
  sendTyping() {
    if (!this.state.amITyping) {
      this.ws.sendMessage({type: 'typing', message: 'typing'});
      this.setState({amITyping: true});
    }
    setTimeout(() => this.setState({amITyping: false}), this.typingTimespan);
  }

  submitOnEnter(handleSubmit) {
    return e => {
      if (e.charCode === 13) {
        handleSubmit();
      }
    };
  }

  getChatBoardContent() {
    const diceMessages = this.state.diceHistory ? this.state.diceHistory.map(d => new ChatMessage(
      `d${d.sides}: ${d.result}`,
      'GM',
      'dice',
      d.time.toString()
    )) : [];
    return this.state.messages.concat(diceMessages).sort((a,b) => a.time.getTime() - b.time.getTime())
  }

  isOpen() {
    return this.ws.getStatus() === 'open';
  }


  render() {
    return (
      <div id="chat-box">
        <div id="chat-board">
          {this.getChatBoardContent().map((m, index) => (
            <div key={index} className="message">
              <span className="time-ago">{timeAgo(m.time)}</span>
              {m.message}
            </div>
          ))}
        </div>
        <div id="who-is-typing" className={this.state.whoIsTyping.length === 0 ? "" : "typing"}>
          {this.state.whoIsTyping.map((a, index) => (
            <span key={index} className="typing-user">{a.username||'anonymous'}</span>
          ))}
        </div>
        <div className="actions">
          <div className="action">
            <input name="message"
              onKeyPress={this.handleKeyPress.bind(this)}
              onChange={this.handleMessageInput.bind(this)}
              placeholder="Message"
              value={this.state.newMessage}
              />
            <button name="send" disabled={!this.ws.getStatus()} onClick={this.sendMessage.bind(this)}>Send</button>
          </div>
        </div>
      </div>
    );
  }

}

export default Chat;
