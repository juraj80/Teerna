import { useContext, useState, useEffect } from 'react';
import { ActivityContext } from '../../../contexts';
import { ChatMessage } from '../../../connection/utils';
import { connection, getTimeAgo, allCommands } from '../../../connection';
import { Input } from '../../core';
import { Container } from '../styles';
import { ChatBoard, ChatBox, ChatItem, MessageForm, TypingBox } from './styles';
import { ButtonPanel } from './ButtonPanel';

export default function Chat() {
	const [ws, setWs] = useState(undefined);
	const [newMessage, setNewMessage] = useState('');
	const [whoIsTyping, setWhoIsTyping] = useState([]);
	const [amITyping, setAmITyping] = useState(false);
	const {diceHistory,chatHistory,updateMessages} = useContext(ActivityContext);
	const [messages, setMessages] = useState([]);

	useEffect(() => chatHistory && chatHistory.length > 0 && setMessages(chatHistory),[chatHistory]);

	useEffect(() => {
		setWs(connection([], [(e) => onMessage(e)], []))
	},[]);

	/**
	 * Hook executed a new message arrives from the WS
	 * @param {MessageEvent} msg received
	 */
	const onMessage = msg => {
		let message = JSON.parse(msg.data);
		if (['story', 'dice', 'error'].includes(message.type)) {
			addChatStory(message);
		} else if (message.type === 'typing') {
			addWhoIsTyping(message);
		}
	};

	const addChatStory = message => {
		const added = messages.concat([message]);
		setMessages(added);
		updateMessages(added);
	};

	const addWhoIsTyping = message => {
		if (whoIsTyping.every(w => w.author && w.author.username !== message.author.username)) {
			setWhoIsTyping([...whoIsTyping, message.author]);
			setTimeout(() => setWhoIsTyping(whoIsTyping.filter(w => w !== message.author),2000));
		}
	};

	/**
	 * Stores the value of the message input in the component state
	 * @param {Event} event that changed the value
	 */
	const handleMessageInput = e => setNewMessage(e.target.value);

	/**
	 * Sends a text message with the WebSockets Client.
	 */
	const sendMessage = () => {
		ws.sendMessage(newMessage);
		setNewMessage('');
	};

	/**
	 * Handles the user input in the chat input box.
	 *
	 * @param {KeyboardEvent} e: the keyPress event
	 * @returns {function(*): void}
	 */
	const handleKeyPress = e =>
		e.key === 'Enter' ? sendMessage() : sendTyping();

	/**
	 * Sends a typing message at most once every two seconds.
	 */
	const sendTyping = () => {
		if (amITyping) {
			ws.sendMessage({ type: 'typing', message: 'typing' });
			setAmITyping(true);
		}
		setTimeout(() => setAmITyping(false), 2000);
	};

	const submitOnEnter = handleSubmit => {
		return e => e.charCode === 13 && handleSubmit();
	};

	const getChatBoardContent = () => {
		const diceMessages = diceHistory
			? diceHistory.map(d => new ChatMessage( `d${d.sides}: ${d.result}`, 'GM', 'dice', d.time.toString()))
			: [];
		return messages.concat(diceMessages).sort((a, b) => a.time - b.time);
	};

	const isOpen = () => ws.getStatus() === 'open';

	return (
		<Container>
            <ChatBox>
                <ChatBoard>
                    {getChatBoardContent().map((m, idx) => (
                        <ChatItem key={idx}>
							<span>
                            <span className='time-ago'>{getTimeAgo(m.time)}</span>
                            {m.message}
							</span>
							<span>{m.author.username}</span>
                        </ChatItem>
                    ))}
                </ChatBoard>
                <TypingBox active={whoIsTyping.length > 0}>
                    {whoIsTyping.map((a,idx) => (
                        <span key={idx} className='user-typing'>{a.username || 'anonymous'}</span>
                    ))}
                </TypingBox> 
                <MessageForm>
                    <Input 
                        type='text' 
                        nameAttr='message' 
                        rightIcon='send' 
                        rightIconAction={() => isOpen && sendMessage()} 
                        placeholder='Type your message...' 
                        value={newMessage} 
                        setValue={setNewMessage} 
                        onKeyPress={(e) => handleKeyPress(e)} 
                        // disabled={() => !isOpen()}
                        requiredField
                    />
                </MessageForm>
            </ChatBox>
			<ButtonPanel setNewMessage={setNewMessage} newMessage={newMessage} sendMessage={sendMessage} />
		</Container>
	);
}
