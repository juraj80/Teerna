import axios from 'axios';

export const createSession = (user) => {
	const options = {
		method: 'POST',
		headers: { 'content-type': 'application/json' },
		data: JSON.stringify(user),
		url: '/game-session',
	};

	return axios(options);
};
