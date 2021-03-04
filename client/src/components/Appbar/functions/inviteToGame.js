import axios from 'axios';

const inviteToGame = ({ token, guid, email }) => {
	axios.post({
		method: 'post',
		url: '/api/game-session/invitation',
		data: { token, guid, email },
	});
};

export default inviteToGame;
