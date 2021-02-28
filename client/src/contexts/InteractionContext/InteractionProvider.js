import { useState, useEffect } from 'react';
import { getTimeAgo } from '../../utils';
import { allCommands } from '../../utils/commands';
import { DiceBag } from './DiceBag';
import { InteactionContext } from './InteactionContext';

export const InteractionProvider = ({ children }) => {
	// DICE
	const [dicebag, setDicebag] = useState(undefined);
	const [sides, setSides] = useState(null);
	const [diceName, setDiceName] = useState(undefined);
	const [roll, setRoll] = useState(undefined);
	const [rollState, setRollState] = useState('idle');
	const [diceHistory, setDiceHistory] = useState([]);

	// CHAT
	const [messages, setMessages] = useState([]);
	// const [chatHistory, setChatHistory] = useState([]);

	// on mount
	useEffect(() => {
		setRoll(undefined);
		setDiceHistory([]);
		setDicebag(new DiceBag());
		// register all commands
		allCommands();
	}, []);

	useEffect(() => {
		sides && setDiceName(`d${sides}`);
	}, [sides]);

	const updateSides = sides => {
		setSides(parseInt(sides, 10));
	};

	const rollAction = async (type = 'public') => {
		const roll = await dicebag.throw(sides, 'public');
		setDiceHistory([...diceHistory, roll]);
		setRoll(roll);
		setRollState('rolling');
		setTimeout(() => setRollState('idle'), 10);
		return roll;
	};

	/**
	 * Formats time
	 *
	 * @param {Object} roll to build the time string.
	 * @returns {string} time of the roll.
	 */
	const rolledWhen = roll => {
		return getTimeAgo(roll.time);
	};

	/**
	 * Hook executed when the connection with the WS is opened
	 */
	const onOpen = () => {};

	const addMessage = msg => setMessages([...messages, msg]);

	const clearLog = limit =>
		setMessages(messages.splice(0, messages.lengh - limit));

	const updateMessages = (msgs) => setMessages(msgs); 

	return (
		<InteactionContext.Provider
			value={{
				onOpen,
				dicebag,
				sides,
				diceName,
				diceHistory,
				roll,
				rollState,
				rolledWhen,
				updateSides,
				rollAction,
				addMessage,
				clearLog,
				updateMessages
			}}
		>
			{children}
		</InteactionContext.Provider>
	);
};

