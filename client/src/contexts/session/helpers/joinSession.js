import axios from 'axios';

export const joinSession = (guid, user) => {
	const options = {
		method: 'POST',
		headers: { 'content-type': 'application/json' },
		data: {...JSON.stringify(user), token: localStorage.getItem('token')},
		url: `/api/game-session/${guid}`,
	};

	return axios(options);
};
