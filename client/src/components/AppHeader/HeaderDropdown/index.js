import { useContext, useCallback, useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import {
	AlertContext,
	AuthContext,
	PlayerContext,
	googleLogin,
	githubLogin,
	logout,
} from '../../../contexts';
import styled from 'styled-components';
import MenuOption from '../MenuOption';

const List = styled.ul`
	list-style-type: none;
	position: absolute;
	width: 100%;
	top: 80%;
	background: transparent;
	z-index: 999;
`;

export default function HeaderDropdown() {
	const [options, setOptions] = useState([{}]);
	const addAlert = useContext(AlertContext);
	const user = useContext(AuthContext);
	const { isGM, togglePlayerMode } = useContext(PlayerContext);

	const requestGoogleLogin = useCallback(() => {
		googleLogin().catch(error =>
			addAlert({ type: 'error', msg: 'unsuccessful login with Google' })
		);
	});

	const requestGithubLogin = useCallback(() => {
		githubLogin().catch(error =>
			addAlert({ type: 'error', msg: 'unsuccessful login with Github' })
		);
	});

	const requestLogout = useCallback(() => {
		logout();
	}, []);

	useEffect(() => {
		if (!user.loggedIn) {
			setOptions([
				{
					key: '01',
					id: 'google',
					descriptor: 'Google Authentication',
					action: requestGoogleLogin,
				},
				{
					key: '02',
					id: 'github',
					descriptor: 'Github Authentication',
					action: requestGithubLogin,
				},
			]);
		} else {
			setOptions([
				{
					key: '03',
					id: 'swithPlayerMode',
					descriptor: `Switch to ${isGM ? 'Player' : 'Game Master'} View`,
					action: togglePlayerMode,
				},
				{
					key: '04',
					id: 'logout',
					descriptor: 'Logout',
					action: requestLogout,
				},
			]);
		}
	}, [user]);

	return (
		<List>
			{options.map(({ key, descriptor, action }) => (
				<MenuOption key={key} descriptor={descriptor} action={action} />
			))}
		</List>
	);
}
