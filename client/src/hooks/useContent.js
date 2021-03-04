import { useState } from 'react';
import { arrayOf, bool, node, number, shape } from 'prop-types';

const useContent = (initialContent, allContentOptions) => {
	const [currIndex, setCurrIndex] = useState(initialContent);

	if (!allContentOptions || !Array.isArray(allContentOptions)) return;

	return {
		currentContent: allContentOptions[currIndex],
		changeContent: setCurrIndex,
	};
};

useContent.propTypes = {
	initialContent: node.isRequired,
	allContentOptions: arrayOf(
		shape({
			index: number,
			content: node,
			gmOnly: bool,
		})
	).isRequired,
};

export default useContent;

// import { useContext, useEffect, useState } from 'react';
// import { PlayerContext } from '../contexts';
// import { options } from '../components/CentreContent/data';
// // import { DocumentManager } from '../modules';
// // import { Documents, Game, Players, Map, JoinRequests } from '../modules';
// import decode from 'jwt-decode';
// import { DocumentManager } from '../modules';

// export default function useSetCentreContent() {
// 	const { isGM } = useContext(PlayerContext);

// 	const [centreContent, setCentreContent] = useState(options.LANDING);
// 	const [hasGMPermissions, setHasGMPermissions] = useState(false);
// 	const [user, setUser] = useState(undefined);
// 	let ActiveModule = <div />;

// 	useEffect(() => {
// 		const idToken = localStorage.getItem('idToken');
// 		idToken && setUser(decode(idToken));
// 	}, []);

// 	useEffect(() => {
// 		user && isGM ? setHasGMPermissions(true) : setHasGMPermissions(false);
// 	}, [user, isGM]);

// 	useEffect(() => {
// 		switch (centreContent) {
// 			case options.DOCUMENTS:
// 				ActiveModule = <DocumentManager />;
// 			case options.LANDING:
// 			default:
// 				ActiveModule = <div />;
// 		}
// 	}, [centreContent]);

// 	return { ActiveModule, hasGMPermissions, centreContent, setCentreContent };
// }

// export default function useSetCentreContent() {
// 	const [centreContent, setCentreContent] = useState(options.LANDING);
// 	const [ActiveModule, setActiveModule] = useState(/*<Landing />*/);
// 	const [user, setUser] = useState(undefined);

// 	useEffect(() => {
// 		const idToken = localStorage.getItem('idToken');
// 		idToken && setUser(decode(idToken));
// 	}, []);

// 	useEffect(() => {
// 		user && setCentreContent(options.GAME);
// 		!user && setCentreContent(options.LANDING);
// 	}, [user]);

// 	// useEffect(() => {
// 	// 	switch (centreContent) {
// 	// 		case options.DOCUMENTS:
// 	// 			setActiveModule(DocumentManager);
// 	// 			break;
// 	// 		// case options.GAME:
// 	// 		// 	setActiveModule(<Game />);
// 	// 		// 	break;
// 	// 		// case options.JOIN_REQUESTS:
// 	// 		// 	setActiveModule(<JoinRequests />);
// 	// 		// 	break;
// 	// 		// case options.MAP:
// 	// 		// 	setActiveModule(<Map />);
// 	// 		// 	break;
// 	// 		// case options.PLAYERS:
// 	// 		// 	setActiveModule(<Players />);
// 	// 		// 	break;
// 	// 		// case options.LANDING:
// 	// 		// default:
// 	// 		// 	setActiveModule(<Landing />);
// 	// 		// 	break;
// 	// 	}
// 	// }, [centreContent]);

// 	return { ActiveModule, setCentreContent };
// }
