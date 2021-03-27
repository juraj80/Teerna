import decode from 'jwt-decode';
import { createInvitation } from './createInvitation';
import { createSession } from './createSession';
import { joinSession } from './joinSession';

export const sessionMethods = {
	createInvitation: (guid, setMessage, sessionInputs, setSessionErrors) => {
        const user = decode(localStorage.getItem('token'));
        const { email } = sessionInputs; 
            createInvitation(user, guid, email)
            .then(async res => {
                setMessage(res.data.invited);
            }).catch((err) => setSessionErrors(prev => [...prev, err]));
    },
	createSession: (setSessionGM, setMessage, setSessionErrors, setGuid) => {
        const user = decode(localStorage.getItem('token'));
        createSession(user)
        .then(async res => {
            const { gameId, gm, message } = res.data;
            setGuid(gameId);
            setMessage(message);
            setSessionGM({ id: user.sub, username: gm });
        }).catch(err => setSessionErrors(prev => [...prev, 'Session could not be created']));
    },
	joinSession: (guid, setGuid, setMessage, setSessionErrors) => {
        const user = decode(localStorage.getItem('token'));
        joinSession(guid, user)
        .then(async res => {
            setMessage(res.data.message);
            setGuid(res.data.gameId);
        })
        .catch(err => setSessionErrors(prev => [...prev, 'Forbidden']));
    },
};
