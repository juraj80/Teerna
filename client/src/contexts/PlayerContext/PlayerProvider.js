import { useState } from 'react';
import { any } from 'prop-types';
import { PlayerContext } from './PlayerContext';

const PlayerProvider = ({ children }) => {
	const [isGM, setIsGM] = useState(false);

	const becomeGM = () => setIsGM(true);

	return (
		<PlayerContext.Provider value={{ isGM, becomeGM }}>
			{children}
		</PlayerContext.Provider>
	);
};

PlayerProvider.propTypes = {
	children: any.isRequired,
};

export { PlayerProvider };
