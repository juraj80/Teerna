import { useState, useContext, useEffect} from 'react';
import {  object } from 'prop-types';
import { AuthenticationForm } from '../../compound';
import { ThemeToggle, Avatar, Modal} from '../../core';
import { AuthContext, ModalContext } from '../../../contexts';
import { useConsoleSize } from '../../../hooks';
import { Menu, MenuItem, Bar, Section, Span} from './styles';
import { images } from '../../../assets';
import { spacing } from '../../../styles';

export default function HeaderBar({  user, toggleTheme }) {
    const { width } = useConsoleSize();
    const { setErrors, handleLogout } = useContext(AuthContext);
    const { updateShow, updateLocked, updateContent } = useContext(ModalContext);

    const [dropdownVisibility, setDropdownVisibility] = useState(false);
    const [menu, setMenu] = useState(undefined);
    const [modalContent, setModalContent] = useState(undefined);

    useEffect(() => {
        if (modalContent) {
            updateShow(false);
            setErrors([]);
            updateContent(() => ({state}) => (
                <Modal size='large' title={modalContent} state={state} updateShow={updateShow}>
                    {modalContent === 'login' && (<AuthenticationForm initialState='login'/>)}
                    {modalContent === 'register' && (<AuthenticationForm initialState='register'/>)}
                    {/* @TODO avatar upload */}
                    {/* @TODO username change */}
                </Modal>
            ));
            updateLocked(false);
            updateShow(true);
            setModalContent(undefined);
        }
    }, [modalContent]);

    useEffect(() => {
        setMenu(user ? (
            <Menu>
                <MenuItem onClick={() => setModalContent('profile-change')}>Update Profile</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
        ) : (
            <Menu>
                <MenuItem onClick={() => setModalContent('login')}>Login</MenuItem>
                <MenuItem onClick={() => setModalContent('register')}>Create Account</MenuItem>
            </Menu>
        ))
    }, [user]);

    const title = ['T', 'E', 'E', 'R', 'N', 'A'];

    return (
        <Bar consoleWidth={`${width}px`}>
            <Section consoleWidth={`${width}px`} start='start'>
                <Span logo>
				    <span style={{height: '48px', overflow: 'hidden' }}>
						<img src={images.logos.teerna} alt='Teerna Logo' />
					</span>
					{title.map((letter, idx) => (
						<span key={idx}>{letter}</span>
					))}
				</Span>
            </Section>
            <Section consoleWidth={`${width}px`} middle='middle' />
			<Section consoleWidth={`${width}px`} end='end'>
                <div style={{marginRight: spacing[8]}}> <ThemeToggle  toggleTheme={toggleTheme} /></div>
				<Avatar
                    style={{cursor: 'pointer'}}
                    size='small'
					source={user && user.picture ? user.picture : undefined}
					action={() => setDropdownVisibility(!dropdownVisibility)}
				/>
				{dropdownVisibility && menu}
			</Section>
        </Bar>
    );

}

HeaderBar.propTypes = {
    user: object,
};