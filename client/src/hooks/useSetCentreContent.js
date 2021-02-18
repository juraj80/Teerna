import { useEffect, useState } from 'react';
import { options } from '../components/CentreContent/data';
// import { Documents, Game, Players, Map, JoinRequests } from '../modules';
import decode from 'jwt-decode';

export default function useSetCentreContent() {
	const [centreContent, setCentreContent] = useState(options.LANDING);
	const [ActiveModule, setActiveModule] = useState(/*<Landing />*/);
	const [user, setUser] = useState(undefined);

	useEffect(() => {
		const idToken = localStorage.getItem('idToken');
		idToken && setUser(decode(idToken));
	}, []);

	useEffect(() => {
		user && setCentreContent(options.GAME);
		!user && setCentreContent(options.LANDING);
	}, [user]);

	useEffect(() => {
		switch (
			centreContent
			// case options.DOCUMENTS:
			// 	setActiveModule(<Documents />);
			// 	break;
			// case options.GAME:
			// 	setActiveModule(<Game />);
			// 	break;
			// case options.JOIN_REQUESTS:
			// 	setActiveModule(<JoinRequests />);
			// 	break;
			// case options.MAP:
			// 	setActiveModule(<Map />);
			// 	break;
			// case options.PLAYERS:
			// 	setActiveModule(<Players />);
			// 	break;
			// case options.LANDING:
			// default:
			// 	setActiveModule(<Landing />);
			// 	break;
		) {
		}
	}, [centreContent]);

	return { ActiveModule, setCentreContent };
}
