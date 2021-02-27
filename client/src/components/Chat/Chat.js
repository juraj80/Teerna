import { useContext, useState } from 'react';
import { InteractionContext } from '../../contexts';
import { useConstructor } from '../../hooks';
import { getTimeAgo } from '../../utils';
import { connection } from '../../WebSocket';
import { Avatar, Icon } from '../../components';
import { ChatMessage } from '../../utils';
import { ChatBox, MessageBoard, Span, ActiveBox, InputBox, Action, Input, Button } from './styles';



export default function Chat() {
    const historyLimit = 100;
    const typingTimespan = 2000;

    const { messages, addMessage, updateMessages, clearLog, diceHistory } = useContext(InteractionContext);
    const [newMessage, setNewMessage] = useState('');
    const [amITyping, setAmITyping] = useState(false);
    const [whoIsTyping, setWhoIsTyping] = useState([]);
    const [ws, setWs] = useState(undefined); 

    useConstructor(() => {
        setWs(connection([], [e => onMessage(e), []]));
    });

   /**
   * Hook executed a new message arrives from the WS.
   *
   * @param {MessageEvent} msg received
   */
    const onMessage = msg => {
      const { message, author, type, time } = JSON.parse(msg.data);
      const chatMsg = new ChatMessage(message, author, type, time);
      if (['story', 'dice', 'error'].includes(type)) {
        addChatStory(chatMsg);
      } else if (type === 'typing') addWhoIsTyping(chatMsg);
    }

    const addChatStory = (msg) => {
        if (messages === historyLimit) clearLog(historyLimit);
        addMessage(msg);
    }

    const addWhoIsTyping = (msg) => {
        // no duplicates
        if (whoIsTyping.every(w => w.author && w.author.username !== msg.author.username)) {
            setWhoIsTyping([...whoIsTyping, msg.author]);
            setTimeout(() => setWhoIsTyping(whoIsTyping.filter(w => w !== msg.author)), typingTimespan)
        }
    }

    /**
     * Stores the value of the message input in the component state
     * @param {Event} event that changed the value
     */
    const handleMessageInput = e => setNewMessage(e.target.value);
    

    /**
     * Sends a text message with the WebSockets Client.
     */
    const sendMessage = ()  => {
        ws.sendMessage(newMessage);
        setNewMessage('');
    }

    /**
     * Sends a typing message at most once every two seconds.
     */
    const sendTyping = () => {
        if (!amITyping) {
            ws.sendMessage({type: 'typing', message: 'typing'});
            setAmITyping(true);
        }
        setTimeout(() => setAmITyping(false), typingTimespan);
    }


    /**
     * Handles the user input in the chat input box.
     *
     * @param {KeyboardEvent} e: the keyPress event
     * @returns {function(*): void}
     */
    const handleKeyPress = e  => {
        e.key === 'Enter' ? sendMessage() : sendTyping();
    }

    const submitOnEnter = handleSubmit => {
        return e =>  e.charCode === 13 && handleSubmit();
    }

    const getChatBoardContent = () => {
        const diceMessages = diceHistory 
            ? (diceHistory.map(d => new ChatMessage(`d${d.sides}: ${d.result}`, 'GM', 'dice', d.time.toString()))) 
            : [];
        updateMessages(messages.concat(diceMessages));
        return messages.sort((a,b) => a.time.getTime() - b.time.getTime());
    }

    const isOpen = () => ws.getStatus() === 'open';


    return (
        <ChatBox>
            <Header>
                Live Chat 
                <Span>
                    <Icon icon='chat'/>
                    {getChatBoardContent().length} messages
                </Span>
            </Header>
            <MessageBoard>
                {getChatBoardContent().map(({time, message, author}, index) => (
                    <Message key={index}>
                        <Avatar altText='message author' size='small' />
                        <Span author>{author || 'anonymous'}</Span>
                        <MessageContent>
                            <Span time>{getTimeAgo(time)}</Span>
                            <Span msg>{message}</Span>
                        </MessageContent>
                    </Message>
                ))}
            </MessageBoard>
            <ActiveBox active={whoIsTyping.length > 0}>
                {whoIsTyping.map(({username}, index) => (
                    <Span key={index}>{username || 'anonymous'} is typing...</Span>
                ))}
            </ActiveBox>
            <InputBox>
                <Action>
                    <input 
                        name='message' 
                        onKeyPress={handleKeyPress} 
                        onChange={handleMessageInput} 
                        placeholder="Type message here..." 
                        value={newMessage}
                    />
                    <button 
                        name='send'
                        disable={!isOpen}
                        onClick={sendMessage}
                    >
                        <Icon icon='send'/>                      
                    </button>
                </Action>
            </InputBox>
        </ChatBox>
    );
}
