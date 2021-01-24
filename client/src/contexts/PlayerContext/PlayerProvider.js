import { useState } from 'react';
import { element, oneOfType, string } from 'prop-types';
import PlayerContext from './PlayerContext';

export default function PlayerProvider({ children }) {
	const [isGM, setIsGM] = useState(false);

	const togglePlayerMode = () => {
		isGM ? setIsGM(false) : setIsGM(true);
	};

	return (
		<PlayerContext.Provider value={{ isGM, togglePlayerMode }}>
			{children}
		</PlayerContext.Provider>
	);
}

PlayerProvider.propTypes = {
	children: oneOfType([element, string]).isRequired,
};
