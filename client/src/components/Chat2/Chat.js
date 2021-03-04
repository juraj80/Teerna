import { useContext, useState, useEffect } from 'react';
import { InteractionContext, SessionContext } from '../../contexts';
import { useConstructor, useConsoleSize } from '../../hooks';
import { getTimeAgo, ChatMessage } from '../../utils';
import { connection } from '../../WebSocket';
import { Avatar, AvatarGroup, Icon, IconButton } from '../../components';
import { Aside, AuthorsBlock, ChatBoard, DiceButtons, InputBlock } from './styles';
import { func, number } from 'prop-types';

export default function Chat({ chatDrawerPos, closeChatDrawer }) {
	const historyLimit = 100;
	const typingTimespan = 2000;

	const { width } = useConsoleSize();
	const {
		isGM,
		messages,
		addMessage,
		updateMessages,
		clearLog,
		diceHistory,
	} = useContext(InteractionContext);
    const [drawerClasses, setDrawerClasses] = useState([]);
    const [newMsg, setNewMsg] = useState('');
	const [amITyping, setAmITyping] = useState(false);
	const [whoIsTyping, setWhoIsTyping] = useState([]);
	const [ws, setWs] = useState(undefined);

	useConstructor(() => {
		setWs(connection([], [e => onMessage(e)], []));
	});

    useEffect(() => {
        chatDrawerPos === 0 ? setDrawerClasses([]) : setDrawerClasses(['drawerOpen']);
    },[chatDrawerPos]);

	/**
	 * Hook executed on new message arrival from WS
	 * @param {MessageEvent} msg - message received
	 */
	const onMessage = msg => {
		const { data } = msg;
		const { message, author, type, time } = JSON.parse(data);
		const chatMsg = new ChatMessage(message, author, type, time);
		['story', 'dice', 'error'].includes(type)
			? addChatStory(chatMsg)
			: type === 'typing' && addWhoIsTyping(chatMsg);
	};

    const addChatStory = msg => {
        messages === historyLimit && clearLog(historyLimit);
        addMessage(msg);
    };

    const addWhoIsTyping = msg => {
        if (whoIsTyping.every(w => w.author && w.author.username !== msg.author.username)) {
            setWhoIsTyping([...whoIsTyping, msg.author]);
            setTimeout(() => setWhoIsTyping(whoIsTyping.filter(w => w !== msg.author)), typingTimespan);
        }
    };

    /**
     * Stores the value of the message input in the component state
     * @param {Event} event - the event that changed the value
     */
    const handleMessageInput = e => setNewMsg(e.target.value);

    /**
     * Sends a text message with the WebSockets client
     */
    const sendMessage = () => {
        ws.sendMessage(newMsg);
        setNewMsg('');
    }

    /**
     * Sends a typing message at most once every 2 seconds
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
     * @param {KeyboardEvent} e- the keyPress event
     * @returns {function(*): void}
     */
    const handleKeyPress = e  => e.key === 'Enter' ? sendMessage() : sendTyping();

    const submitOnEnter = handleSubmit => e => e.charCode === 13 && handleSubmit();

    const getChatBoardContent = () => {
        const diceMessages = diceHistory.map(d => new ChatMessage(`d${d.sides}: ${d.result}`, 'GM', 'dice', d.time.toString())) || [];
        // updateMessages(messages.concat(diceMessages));
        return messages.sort((a,b) => a.time.getTime() - b.time.getTime());
    }

    const isOpen = () => ws.getStatus() === 'open';

    return (
        <Aside consoleWidth={`${width}px`} drawerOpen={chatDrawerPos === 1}>
            <IconButton className='close' icon='close' action={closeChatDrawer} status='error'/>
            <ChatBoard>
            MESSAGES
                {/* {getChatBoardContent().map(({time, message, author}, idx) => (
                    <div>{time} {message} {author}</div>
                ))} */}
            </ChatBoard>
            <AuthorsBlock>
                {whoIsTyping.length === 1 && `${whoIsTyping[0].username} is typing...`}
                {whoIsTyping.length > 1 && 
                    <span>
                        {whoIsTyping.filter((w,idx) => idx < 3).map(({username}, idx) => {
                           return `${username} ${idx === whoIsTyping.length - 1 && ', '}`;
                        })}
                    </span>
                }
            </AuthorsBlock>
            <InputBlock>
            {/* input message, send button */}
            </InputBlock>
            <DiceButtons>
               DICE BUTTONS
            </DiceButtons>
        </Aside>
    )


}

Chat.propTypes = {
    chatDrawerPos: number.isRequired,
    closeChatDrawer: func.isRequired
};
