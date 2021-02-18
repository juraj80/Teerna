import axios from 'axios';

const createGame = ({ user, token }) => {
	const res = axios.post({
		method: 'post',
		url: '/api/game-session',
		data: { user, token },
	});
	return res;
};

export default createGame;
