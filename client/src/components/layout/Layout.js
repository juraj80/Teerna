import { useContext, useEffect, useState } from 'react';
import { SessionContext } from '../../contexts';
import { Console } from './Console';
import { AppBar } from './AppBar';
import { HeaderBar } from './HeaderBar';
import { NavSideBar } from './NavSideBar';
import { ActivitySideBar } from './ActivitySideBar';
import { CentreScreen } from './CentreScreen';
import { Landing } from './Landing';
import { SessionActions } from './SessionActions';

export default function Layout({ user, toggleTheme }) {
	const { isGM, guid } = useContext(SessionContext);
	const [drawerPos, setDrawerPos] = useState(1);
	const [activity, setActivity] = useState('doc-manager');
	const [centre, setCentre] = useState('story-view');
	const [availableContent, setAvailableContent] = useState(
		user && isGM 
		? 'gm-content' 
		: user && !isGM && guid 
		? 'player-content' 
		: user && !isGM && !guid 
		? 'authed-content' 
		: 'landing-content'
	);

	useEffect(() => {
		if (user && isGM) setAvailableContent('gm-content');
		else if (user && !isGM && guid) setAvailableContent('player-content');
		else if (user && !isGM && !guid) setAvailableContent('authed-content');
		else setAvailableContent('landing-content');
	}, []);
	// put in deps

	useEffect(() => {
		if (centre === 'story-view') setActivity('doc-manager');
		if (activity === 'doc-manager') setActivity('story-view');
	}, [centre, activity])

	const handleDrawer = () => {
		if (user) {
			drawerPos < 2 ? setDrawerPos(drawerPos + 1) : setDrawerPos(0);
		} else setDrawerPos(0);
	};


	return (
		<Console>
			<HeaderBar user={user} toggleTheme={toggleTheme} />
			{availableContent === 'landing-content' && <Landing />}
			{availableContent === 'gm-content' || availableContent === 'player-content' && (
				<>
					<AppBar handleDrawer={handleDrawer} />
					<NavSideBar drawerPos={drawerPos} setActivity={setActivity} setCentre={setCentre}/>
					<CentreScreen viewType={centre} drawerPos={drawerPos} />
					<ActivitySideBar activityType={activity} />
				</>
			)}
			{availableContent === 'authed-content' && <SessionActions />}
		</Console>
	);
}
