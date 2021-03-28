import { useState, useEffect } from 'react';
import { node } from 'prop-types';
import { getTimeAgo, allCommands } from '../../connection';
import { DiceBag } from './helpers';
import { ActivityContext } from './context';

export const ActivityProvider = ({ children }) => {
	// DICE
	const [dicebag, setDicebag] = useState(undefined);
	const [sides, setSides] = useState(null);
	const [diceName, setDiceName] = useState(undefined);
	const [roll, setRoll] = useState(undefined);
	const [rollState, setRollState] = useState('idle');
	const [diceHistory, setDiceHistory] = useState([]);

	// CHAT
	// const [messages, setMessages] = useState([]);
	const [chatHistory, setChatHistory] = useState([]);

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
		const roll = await dicebag.throw(sides, type);
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

	// const addMessage = msg => setMessages(messages.concat([msg]));

	const clearLog = limit => setChatHistory(chatHistory.splice(0, chatHistory.length - limit));

	const updateMessages = (messages) => setChatHistory(messages); 

	return (
		<ActivityContext.Provider
			value={{
				onOpen,
				dicebag,
				sides,
				diceName,
				diceHistory,
				roll,
				rollState,
				chatHistory,
				// messages,
				rolledWhen,
				updateSides,
				rollAction,
				// addMessage,
				clearLog,
				updateMessages
			}}
		>
			{children}
		</ActivityContext.Provider>
	);
};

ActivityProvider.propTypes = {
    children: node.isRequired
}