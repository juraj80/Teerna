import { useContext, useCallback, useState, useEffect } from 'react';
import { AlertContext, AuthContext } from '../../../contexts';
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

	useEffect(() => {
		if (!user) {
			setOptions([
				{
					id: 'google',
					name: 'Google Authentication',
					action: requestGoogleLogin,
				},
				{
					id: 'github',
					name: 'Github Authentication',
					action: requestGithubLogin,
				},
			]);
		} else {
			setOptions([
				{
					id: 'logout',
					name: 'Logout',
					action: requestLogout,
				},
			]);
		}
	}, [user]);

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

	return (
		<List>
			{options.map(opt => (
				<MenuOption key={opt.id} option={opt} />
			))}
		</List>
	);
}
