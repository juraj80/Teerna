import axios from 'axios';

export const joinSession = (guid, user) => {
	const options = {
		method: 'POST',
		headers: { 'content-type': 'application/json' },
		data: JSON.stringify(user),
		url: `/game-session/${guid}`,
	};

	return axios(options);
};
