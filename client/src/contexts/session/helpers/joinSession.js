import axios from 'axios';

export const joinSession = (guid, user) => {
	const options = {
		method: 'GET',
		headers: { 'content-type': 'application/json' },
		params: {token: localStorage.getItem('token')},
		url: `/api/game-session/${guid}`,
	};

	return axios(options);
};
