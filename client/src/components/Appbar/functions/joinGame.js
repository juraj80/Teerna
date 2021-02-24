import axios from 'axios';

const joinGame = ({ guid, user, token }) => {
	axios.post({
		method: 'post',
		url: '/api/game-session/join-request',
		data: { guid, user, token },
	});
};

export default joinGame;
