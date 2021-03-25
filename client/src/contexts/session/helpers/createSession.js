import axios from 'axios';

export const createSession = (user) => {
	const options = {
		method: 'POST',
		headers: { 'content-type': 'application/json' },
		data: JSON.stringify(user),
		url: '/api/game-session/',
	};

	return axios(options);
};
