import { useContext, useState } from 'react';
import { SessionContext } from '../../contexts';
import { ThemeToggle } from '../core';
import { Console } from './Console';
import { AppBar } from './AppBar';
import { HeaderBar } from './HeaderBar';
import { NavSideBar } from './NavSideBar';
import { ActivitySideBar } from './ActivitySideBar';
import { CentreScreen } from './CentreScreen';

export default function Layout({ user, toggleTheme }) {
	const { isGM } = useContext(SessionContext);
	const [drawerPos, setDrawerPos] = useState(1);
	const [activity, setActivity] = useState('doc-manager');
	const [centre, setCentre] = useState('map-view');

	const handleDrawer = () => {
		if (user) {
			drawerPos < 2 ? setDrawerPos(drawerPos + 1) : setDrawerPos(0);
		} else setDrawerPos(0);
	};

	return (
		<Console>
			<HeaderBar user={user} toggleTheme={toggleTheme} />
			<AppBar handleDrawer={handleDrawer} />
			<NavSideBar drawerPos={drawerPos} setActivity={setActivity} setCentre={setCentre}/>
			<CentreScreen viewType={centre} drawerPos={drawerPos} />
			<ActivitySideBar activityType={activity} />
		</Console>
	);
}
