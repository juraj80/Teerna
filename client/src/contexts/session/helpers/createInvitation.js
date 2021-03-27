import axios from 'axios';

export const createInvitation = (user, guid, email) => {
    const data = JSON.stringify({user, guid, email});
    const options = { 
        method: 'POST',
        headers: { 'content-type' : 'application/json'},
        data, 
        url: '/game-session/invitation'
    }

    return axios(options);
};