import { useContext, useEffect, useState } from 'react';
import { func, object } from 'prop-types';
import { Menu, MenuItem, Bar, BarSection, Span } from './styles';
import { Login, Social, Register, Username, AvatarUpload } from './forms';
import { AuthContext, ModalContext } from '../../contexts';
import { Modal, Avatar, Icon, ThemeToggle } from '../../components';
import { useConsoleSize } from '../../hooks';
import Logo from '../../shared/assets/logo-light.png';

export default function HeaderBar({ toggleTheme, user }) {
	const { width } = useConsoleSize();
	const { setErrors, handleLogout } = useContext(AuthContext);
	const { updateShow, updateContent, updateLocked } = useContext(ModalContext);

	const [showDropdown, setShowDropdown] = useState(false);
	const [menu, setMenu] = useState(undefined);
	const [modal, setModal] = useState(undefined);

	useEffect(() => {
		if (modal) {
			updateShow(false);
			setErrors([]);
			updateContent(() => ({ state }) => (
				<Modal title={modal} state={state} updateShow={updateShow}>
					{modal === 'LOGIN' && (
						<Login
							updateShow={() => updateShow(false)}
							closeDropdown={() => setShowDropdown(false)}
						/>
					)}
					{modal === 'REGISTER' && (
						<Register
							updateShow={() => updateShow(false)}
							closeDropdown={() => setShowDropdown(false)}
						/>
					)}
					{modal === 'SOCIAL' && (
						<Social
							updateShow={() => updateShow(false)}
							closeDropdown={() => setShowDropdown(false)}
						/>
					)}
					{modal === 'USERNAME' && (
						<Username
							updateShow={() => updateShow(false)}
							closeDropdown={() => setShowDropdown(false)}
						/>
					)}
					{modal === 'AVATAR' && (
						<AvatarUpload
							updateShow={() => updateShow(false)}
							closeDropdown={() => setShowDropdown(false)}
						/>
					)}
				</Modal>
			));
			updateLocked(false);
			updateShow(true);
			setModal(undefined);
		}
	}, [modal]);

	useEffect(() => {
		setMenu(
			user ? (
				<Menu>
					<MenuItem header>My Account</MenuItem>
					<MenuItem onClick={() => setModal('USERNAME')}>Set Username</MenuItem>
					<MenuItem onClick={() => setModal('AVATAR')}>Set Avatar</MenuItem>
					<MenuItem onClick={handleLogout}>Logout</MenuItem>
				</Menu>
			) : (
				<Menu>
					<MenuItem onClick={() => setModal('LOGIN')}>Login</MenuItem>
					<MenuItem onClick={() => setModal('REGISTER')}>
						Create Account
					</MenuItem>
					<MenuItem onClick={() => setModal('SOCIAL')}>Social Login</MenuItem>
				</Menu>
			)
		);
	}, [user]);

	const name = ['T', 'E', 'E', 'R', 'N', 'A'];

	return (
		<Bar consoleWidth={`${width}px`}>
			<BarSection consoleWidth={`${width}px`} left>
				<Span logo>
					<span>
						<img src={Logo} alt='Teerna Logo' />
					</span>
					{name.map((letter, idx) => (
						<span key={idx}>{letter}</span>
					))}
				</Span>
			</BarSection>
			<BarSection consoleWidth={`${width}px`} middle />
			<BarSection consoleWidth={`${width}px`} right>
				<ThemeToggle toggleTheme={toggleTheme} />
				<Avatar
                    size='small'
					source={user.picture || undefined}
					action={() => setShowDropdown(!showDropdown)}
				/>
				{showDropdown && menu}
			</BarSection>
		</Bar>
	);
}

HeaderBar.propTypes = {
	user: object,
	toggleTheme: func.isRequired,
};
