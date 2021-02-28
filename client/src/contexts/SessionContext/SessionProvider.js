import { useEffect, useState } from 'react';
import { any } from 'prop-types';
import decode from 'jwt-decode';
import { SessionContext } from './SessionContext';
import { sessionMethods } from './functions';

export const SessionProvider = ({ children }) => {
    const [isGM, setIsGM] = useState(false);
	const [sessionInputs, setSessionInputs] = useState({ email: '', gameId: '' });
    const [sessionGM, setSessionGM] = useState(undefined);
	const [guid, setGuid] = useState(undefined);
	const [sessionErrors, setSessionErrors] = useState([]);
    const [message, setMessage] = useState(undefined);

    useEffect(() => {
        const { sub } = decode(localStorage.getItem('token'));
        sessionGM.id ===  sub ? setIsGM(true) : setIsGM(false);  
    },[sessionGM]);


	const { createInvitation, createSession, joinSession } = sessionMethods;

	const handleCreateInvitation = () =>
		createInvitation(guid, setMessage, sessionInputs, setSessionErrors);
	const handleCreateSession = () =>
		createSession(setSessionGM, setMessage, setSessionErrors, setGuid);
	const handleJoinSession = () =>
		joinSession(guid, setGuid, setSessionErrors);

	return (
		<SessionContext.Provider
			value={{
                isGM,
                sessionGM,
				session,
				sessionErrors,
				guid,
                message,
				setSessionInputs,
				handleCreateInvitation,
				handleCreateSession,
				handleJoinSession,
			}}
		>
			{children}
		</SessionContext.Provider>
	);
};

SessionProvider.propTypes = {
	children: any.isRequired,
};
