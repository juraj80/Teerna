import decode from 'jwt-decode';
import {createInvitation, createSession, joinSession } from '../functions';

export const sessionMethods = {
	createInvitation: (guid, setMessage, sessionInputs, setSessionErrors) => {
        const user = decode(localStorage.getItem('token'));
        const { email, gameId } = sessionInputs; 
        if (guid === gameId) {
            createInvitation(user, guid, email)
            .then(async res => {
                setMessage(res.invited);
            }).catch((err) => setSessionErrors(prev => [...prev, err]));
        } else setSessionErrors(prev => [...prev, 'Invalid Game Code.'])
    },
	createSession: (setSessionGM, setMessage, setSessionErrors, setGuid) => {
        const user = decode(localStorage.getItem('token'));
        createSession(user)
        .then(async res => {
            setGuid(res.gameId);
            setMessage(res.message);
            setSessionGM({ id: user.sub, username: res.username });
        }).catch(err => setSessionErrors(prev => [...prev, err]));
    },
	joinSession: (guid, setGuid, setMessage, setSessionErrors) => {
        const user = decode(localStorage.getItem('token'));
        joinSession(guid, user)
        .then(async res => {
            setMessage(res.message);
            setGuid(res.gameId);
        })
        .catch(err => setSessionErrors(prev => [...prev, err]));
    },
};
