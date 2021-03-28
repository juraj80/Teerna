import axios from 'axios';

export const createInvitation = (guid, email) => {
	const token = localStorage.getItem('token');
	const data = JSON.stringify({token, guid, email});
	const options = {
		method: 'POST',
		headers: { 'content-type' : 'application/json'},
		data,
		url: '/api/game-session/invitation'
	}
	return axios(options);
};
