import { useContext, useState, useEffect } from 'react';
import decode from 'jwt-decode';
import { Wrapper, Menu } from './styles';
import { ActionItem } from './components';
import { useConsoleSize } from '../../hooks';

const Appbar = ({ currentScreen, user }) => {
	const { width } = useConsoleSize();

	return (
		<Wrapper isFull={!user} barWidth={`${width * 0.6}px`}>
			<Menu>
				<ActionItem action={() => {}}>{currentScreen}</ActionItem>
			</Menu>
		</Wrapper>
	);
};

export default Appbar;

// import { useContext, useEffect, useState } from 'react';
// import { bool } from 'prop-types';
// import {
// 	AuthContext,
// 	PlayerContext,
// 	ModalContext,
// 	AlertContext,
// } from '../../contexts';
// import { SendJoinRequestForm, SendInviteForm, FolderUpload } from '../';
// import { Modal } from '../';
// import { landingItems, gmItems, playerItems, actions } from './data';
// import { createGame } from './functions';
// import { Wrapper, Menu } from './styles';
// import { ActionItem } from './components';
// import { useConsoleSize } from '../../hooks';

// const Appbar = () => {
// 	const [items, updateItems] = useState([]);
// 	const [modalContent, setModalContent] = useState('');
// 	const { token, user } = useContext(AuthContext);
// 	const { isGM } = useContext(PlayerContext);
// 	const addAlert = useContext(AlertContext);
// 	const { updateShow, updateContent, updateLocked } = useContext(ModalContext);
// 	const { width } = useConsoleSize();

// 	useEffect(() => {
// 		!token && !user && updateItems(landingItems);
// 		token && user && isGM && updateItems(gmItems);
// 		token && user && !isGM && updateItems(playerItems);
// 	}, [token, isGM]);

// 	useEffect(() => {
// 		if (modalContent !== '') {
// 			updateShow(false);
// 			updateContent(() => ({ state }) => (
// 				<Modal
// 					state={state}
// 					updateShow={updateShow}
// 					size='small'
// 					style={{ paddingBottom: '16px', height: '280px' }}
// 				>
// 					{modalContent === 'invitation' && (
// 						<SendInviteForm updateShow={() => updateShow(false)} />
// 					)}
// 					{modalContent === 'loadGame' && (
// 						<FolderUpload updateShow={() => updateShow(false)} />
// 					)}
// 					{modalContent === 'joinRequest' && (
// 						<SendJoinRequestForm updateShow={() => updateShow(false)} />
// 					)}
// 				</Modal>
// 			));
// 			updateLocked(false);
// 			updateShow(true);
// 			setModalContent('');
// 		}
// 	}, [modalContent]);

// 	const applyAction = actionType => {
// 		switch (actionType) {
// 			case actions.CREATE_GAME:
// 				if (!token || !user || !isGM) {
// 					addAlert('error', 'Invalid authorisation to start a new game.');
// 					break;
// 				}
// 				const res = createGame(user, token);
// 				// if success - addAlert('success', 'Succefully created game')
// 				break;
// 			case actions.INVITE:
// 				if (!isGM || !user || !token) {
// 					addAlert('error', 'You must be a GM to invite');
// 					break;
// 				}
// 				setModalContent('invitation');
// 				break;
// 			case actions.LOAD_GAME:
// 				if (!isGM || !user || !token) {
// 					setModalContent('loadGame');
// 					break;
// 				}
// 				setModalContent('loadGame');
// 				break;
// 			case actions.REQUEST_JOIN:
// 				if (!token || !user) {
// 					addAlert('error', 'Log in to send join request.');
// 					break;
// 				}
// 				if (isGM) {
// 					addAlert('error', 'You cannot join a game as a GM.');
// 					break;
// 				}
// 				setModalContent('joinRequest');
// 				break;
// 		}
// 	};

// 	return (
// 		<Wrapper isFull={!token} barWidth={`${width * 0.6}px`}>
// 			<Menu>
// 				{items.map(i => (
// 					<ActionItem
// 						key={i.itemTitle}
// 						action={() => applyAction(i.itemAction)}
// 					>
// 						{i.itemTitle}
// 					</ActionItem>
// 				))}
// 			</Menu>
// 		</Wrapper>
// 	);
// };

// Appbar.propTypes = {
// 	// chatOpen: bool.isRequired,
// };

// export default Appbar;
