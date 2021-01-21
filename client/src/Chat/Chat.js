import React, { Component } from 'react';
import './Chat.css';

const config = {
  ws: {
    domain: 'localhost',
    port: 8888
  }
}

class Chat extends Component {

  historyLimit = 100;

  state = {
    disabled: true,
    messages: [],
    newMessage: "",
  }

  constructor(props) {
    super(props);
    this.ws = new WebSocket(`ws://${config.ws.domain}:${config.ws.port}`);
  }

  componentDidMount() {
    // Bind the WebSockets events when the component is already mounted
    this.ws.onopen = this.onOpen.bind(this);
    this.ws.onmessage = this.onMessage.bind(this);
  }

  /**
   * Hook executed when the connection with the WS is opened
   */
  onOpen() {
    this.setState({disabled: false});
  }

  /**
   * Hook executed a new message arrives from the WS.
   *
   * @param {MessageEvent} msg received
   */
  onMessage(msg) {
    const message = JSON.parse(msg.data);
    if (message.type === 'story') {
      const added = this.state.messages.concat([message.value])
      if (added.length > this.historyLimit) {
        added.splice(0, added.length - this.historyLimit);
      }
      this.setState({messages: added});
    }
  }

  /**
   * Builds and object chat message for sending text.
   *
   * @param text
   */
  buildMessage(text) {
    return JSON.stringify(
        {
          type: 'story',
          author: 'GM',
          value: text
        }
    );
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
    this.ws.send(
      this.buildMessage(this.state.newMessage)
    );
    this.setState({newMessage: ""});
  }

  submitOnEnter(handleSubmit) {
    return e => {
      if (e.charCode === 13) {
        handleSubmit();
      }
    };
  }

  render() {
    return (
      <div id="chat-box">
        <div id="chat-board">
          {this.state.messages.map((m, index) => (<div key={index} className="message">{m}</div>))}
        </div>
        <div className="actions">
          <div className="action">
            <input name="message"
              onKeyPress={this.submitOnEnter(this.sendMessage.bind(this))}
              onChange={this.handleMessageInput.bind(this)}
              placeholder="Message"
              value={this.state.newMessage}
              />
            <button name="send" disabled={this.state.disabled} onClick={this.sendMessage.bind(this)}>Send</button>
          </div>
        </div>
      </div>
    );
  }

}

export default Chat;
