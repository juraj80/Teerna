import { useContext, useCallback, useState, useEffect } from 'react';
import { AlertContext, AuthContext, PlayerContext } from '../../../contexts';
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
	const { user, googleLogin, githubLogin, logout } = useContext(AuthContext);
	const { isGM, togglePlayerMode } = useContext(PlayerContext);

	const requestGoogleLogin = useCallback(() => {
		googleLogin().catch(error =>
			addAlert('error', 'unsuccesful login through Google')
		);
	});

	const requestGithubLogin = useCallback(() => {
		githubLogin().catch(error =>
			addAlert('error', 'unsuccesful login through Github')
		);
	});

	const requestLogout = useCallback(() => {
		logout();
	}, []);

	useEffect(() => {
		if (user) {
			setOptions([
				{
					id: 'google',
					descriptor: 'Google Authentication',
					action: requestGoogleLogin,
				},
				{
					id: 'github',
					descriptor: 'Github Authentication',
					action: requestGithubLogin,
				},
			]);
		} else {
			setOptions([
				{
					id: 'swithPlayerMode',
					descriptor: `Switch to ${isGM ? 'Player' : 'Game Master'} View`,
					action: togglePlayerMode,
				},
				{
					id: 'logout',
					descriptor: 'Logout',
					action: requestLogout,
				},
			]);
		}
	}, [user]);

	return (
		<List>
			{options.map(({ id, descriptor, action }) => (
				<MenuOption key={id} descriptor={descriptor} action={action} />
			))}
		</List>
	);
}
