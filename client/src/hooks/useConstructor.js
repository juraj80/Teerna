import { func } from 'prop-types';
import { useState } from 'react';

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
