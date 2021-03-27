import { useContext, useEffect, useState } from 'react';
import decode from 'jwt-decode';
import { AlertContext, ModalContext, SessionContext } from '../../contexts';
import { Console } from './Console';
import { AppBar } from './AppBar';
import { HeaderBar } from './HeaderBar';
import { NavSideBar } from './NavSideBar';
import { ActivitySideBar } from './ActivitySideBar';
import { CentreScreen } from './CentreScreen';
import { Landing } from './Landing';
import { SessionActions } from './SessionActions';
import { useConstructor } from '../../hooks';
import { Modal } from '../core';
import { CodeText, Form, MsgText } from '../compound/forms/Invitation/styles';

export default function Layout({ toggleTheme }) {
	const [user, setUser] = useState(undefined);
	const { updateContent, updateShow } = useContext(ModalContext);
	const addAlert = useContext(AlertContext);
	const session = useContext(SessionContext);
	const [drawerPos, setDrawerPos] = useState(1);
	const [activity, setActivity] = useState('doc-manager');
	const [centre, setCentre] = useState('story-view');
	const [availableContent, setAvailableContent] = useState(
		user && session.isGM 
		? 'gm-content' 
		: user && !session.isGM && session.guid 
		? 'player-content' 
		: user && !session.isGM && !session.guid 
		? 'authed-content' 
		: 'landing-content'
	);

	useConstructor(() => {
		const token = localStorage.getItem('token');
		token && setUser(decode(token));
	});

	useEffect(() => {
		const { isGM, guid } = session; 
		if (user && isGM) setAvailableContent('gm-content');
		else if (user && !isGM && guid) setAvailableContent('player-content');
		else if (user && !isGM && !guid) setAvailableContent('authed-content');
		else setAvailableContent('landing-content');
	},[session, user]);
	
	useEffect(() => {
		session.isGM && session.guid && updateContent(() => ({state}) => 
		<Modal state={state} updateShow={() => updateShow(false)}>
			<Form>
				<CodeText>
					Invitation code generated: <div>{session.guid}</div>
				</CodeText>
			</Form>
		</Modal>);
	},[session.handleCreateInvitation]);

	useEffect(() => {
		if (session.sessionErrors.length > 0) addAlert('error', session.sessionErrors.join('\n'));
	},[session.setSessionErrors]);

	const handleDrawer = () => {
		if (user) {
			drawerPos < 2 ? setDrawerPos(drawerPos + 1) : setDrawerPos(0);
		} else setDrawerPos(0);
	};

	if (['gm-content','player-content'].includes(availableContent)) return (
		<Console>
			<HeaderBar user={user} toggleTheme={toggleTheme} />	
			<AppBar handleDrawer={handleDrawer} />
			<NavSideBar drawerPos={drawerPos} setActivity={setActivity} setCentre={setCentre}/>
			<CentreScreen viewType={centre} drawerPos={drawerPos} />
			<ActivitySideBar activityType={activity} />
		</Console>
	);

	return (
		<Console>
			<HeaderBar user={user} toggleTheme={toggleTheme} />
			{availableContent === 'landing-content' && <Landing user={user} />}
			{availableContent === 'authed-content' && <SessionActions user={user} />}
		</Console>
	);
}
