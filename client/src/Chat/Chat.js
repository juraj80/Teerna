import React, { Component } from 'react';

const config = {
  ws: {
    domain: 'localhost',
    port: 8888
  }
}


class Chat extends Component {

  state = {
    disabled: true,
    messages: [],
    background: ''
  }
  
  constructor(props) {
    super(props);
    this.ws = new WebSocket(`ws://${config.ws.domain}:${config.ws.port}`);
  }

  /**
   * Hook executed when the connection with the WS is oppend
   */
  onOpen() {
    this.ws.onopen = function() {
      this.setState({disabled: false});
    };
  }

  /**
   * Hook executed a new message arrives from the WS.
   */
  onMessage() {
    this.ws.onmessage = function(msg) {
      const message = JSON.parse(msg.data);
      if (message.type === 'background') {
        this.setState({background: message.value});
      }
      if (message.type === 'story') {
        const added = this.state.messages.concat([message.value])
        if (added.length > 5) {
          added.splice(0, added.length - 5);
        }
        this.setState({messages: added});
      }
    };
  }

  /**
   * Builds an object chat message for changing the background
   *
   * @param {string} background to be broadcasted.
   * @returns {Object} chat message
   */
  buildSceneChange(background) {
    return JSON.stringify(
      {
        type: 'background',
        author: 'GM',
        value: background
      }
    );
  }

  render() {
    return (
      <div id="chat-box">
        <div id="chat-board">
          {this.state.messages.map(m => (<div>{m}</div>))}
        </div>
        <div class="actions">
          <input name="message" placeholder="Message"></input>
          <button name="send" disabled={this.state.disabled} >Send</button>
          <input name="background" placeholder="Paste a URL"></input>
          <button name="changeBackground" disabled={this.state.disabled} >Change background</button>
        </div>
      </div>
    );
  }

}

export default Chat;
