import React, { Component } from 'react';
import {ChatMessage, createMessage} from './Message';
import './Chat.css';
import DiceContext from "../../contexts/DiceContext/DiceContext";
import {timeAgo} from "../Time/Time";
import {connection} from "../WSocket/WSocket"

class Chat extends Component {
  static contextType = DiceContext;

  historyLimit = 100;

  state = {
    disabled: true,
    messages: [],
    newMessage: "",
    diceHistory: []
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
      const added = this.state.messages.concat([message])
      if (added.length > this.historyLimit) {
        added.splice(0, added.length - this.historyLimit);
      }
      this.setState({messages: added});
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
        <div className="actions">
          <div className="action">
            <input name="message"
              onKeyPress={this.submitOnEnter(this.sendMessage.bind(this))}
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
