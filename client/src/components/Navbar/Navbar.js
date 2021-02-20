import { useContext, useEffect, useState } from 'react';
import { func } from 'prop-types';
import decode from 'jwt-decode';
import { AuthContext, ModalContext, PlayerContext } from '../../contexts';
import { Avatar, Modal, ThemeToggle, GMToggle } from '../';
import { LoginForm, RegisterForm } from '../ModalContent';
import { Bar, Section, Menu, Item } from './styles';

const Navbar = ({ toggleTheme, user }) => {
	const { setErrors, handleLogout } = useContext(AuthContext);
	const { updateShow, updateLocked, updateContent } = useContext(ModalContext);
	const { isGM, becomeGM } = useContext(PlayerContext);

	const [dropdown, showDropdown] = useState(false);
	const [modalType, setModalType] = useState('');
	const [dropdownContent, updateDropdownContent] = useState();

	useEffect(() => {
		if (modalType !== '') {
			updateShow(false);
			setErrors([]);
			updateContent(() => ({ state }) => (
				<Modal
					state={state}
					updateShow={updateShow}
					style={{ paddingBottom: '16px' }}
				>
					{modalType === 'login' && (
						<LoginForm
							updateShow={() => updateShow(false)}
							closeDropdown={() => showDropdown(false)}
						/>
					)}
					{modalType === 'register' && (
						<RegisterForm
							updateShow={() => updateShow(false)}
							closeDropdown={() => showDropdown(false)}
						/>
					)}
				</Modal>
			));
			updateLocked(false);
			updateShow(true);
			setModalType('');
		}
	}, [modalType]);

	useEffect(() => {
		updateDropdownContent(
			user ? (
				<Menu>
					{/* @TODO */}
					<Item onClick={() => setModalType('updateProfile')}>
						Update Profile
					</Item>
					<Item onClick={handleLogout}>Logout</Item>
				</Menu>
			) : (
				<Menu>
					<Item onClick={() => setModalType('login')}>Login</Item>
					<Item onClick={() => setModalType('register')}>Create Account</Item>
				</Menu>
			)
		);
	}, [user]);

	return (
		<Bar>
			<Section>
				<ThemeToggle toggleTheme={toggleTheme} />
			</Section>
			<Section>{user && <GMToggle isGM={isGM} setIsGM={becomeGM} />}</Section>
			<Section></Section>
			<Section></Section>
			<Section>
				<Avatar clickable={true} action={() => showDropdown(!dropdown)} />
				{dropdown && dropdownContent}
			</Section>
		</Bar>
	);
};

Navbar.propTypes = {
	toggleTheme: func.isRequired,
};

export default Navbar;
