import { func } from 'prop-types';
import { useState } from 'react';

/**
 * @description Replicated functionality of `constructor(props)` 
 * 				from class components to be used in functional components
 * @param {Function} callback - the function to be called inside constructor
 */
const useConstructor = (callback = () => {}) => {
	const [hasBeenCalled, setHasBeenCalled] = useState(false);
	if (hasBeenCalled) return;
	callback();
	setHasBeenCalled(true);
};

useConstructor.propTypes = {
	callback: func.isRequired,
};

export default useConstructor;
