import { useContext, useEffect, useState } from 'react';
import {} from 'prop-types';
import decode from 'jwt-decode';
import {
	AlertContext,
	AuthContext,
	ModalContext,
	PlayerContext,
} from '../../contexts';
import { Icon } from '../';
import { Wrapper, Container, Module, ModuleTitle, ModuleMenu } from './styles';
import { LinkItem } from './components';
import { messagingOptions, gameManagementOptions } from './data';
import { useConsoleSize } from '../../hooks';
import { func } from 'prop-types';
import { RegisterForm } from '../ModalContent';
import { Modal } from '../Modal';

const Sidebar = ({ changeContent, user }) => {
	const { width, height } = useConsoleSize();
	const addAlert = useContext(AlertContext);
	const { setErrors } = useContext(AuthContext);
	const { isGM } = useContext(PlayerContext);
	const { updateShow, updateLocked, updateContent } = useContext(ModalContext);

	const handleContent = idx => {
		if (!user) {
			addAlert('error', 'You must be logged in to use this feature.');
			changeContent(100);
			updateShow(false);
			setErrors([]);
			updateContent(() => ({ state }) => (
				<Modal
					state={state}
					updateShow={updateShow}
					style={{ paddingBottom: '16px' }}
				>
					<RegisterForm updateShow={() => updateShow(false)} />
				</Modal>
			));
			updateLocked(false);
			updateShow(true);
		} else {
			changeContent(idx);
		}
	};

	return (
		<Wrapper navWidth={`${width * 0.15}px`} navHeight={`${height - 48}px`}>
			<Container navWidth={`${width * 0.15}px`}>
				<Module>
					<ModuleTitle>Messaging</ModuleTitle>
					<ModuleMenu>
						{messagingOptions.map(
							({ index, title, icon, notifications, gmOnly }) => (
								<LinkItem
									key={index}
									linkAction={() => {}}
									notification={notifications}
									disabled={gmOnly && !isGM}
								>
									<span style={{ display: 'flex', alignContent: 'center' }}>
										<Icon
											width='24px'
											height='20px'
											style={{
												paddingRight: '20px',
												marginLeft: '-4px',
											}}
											icon={icon}
										/>
										{title}
									</span>
									{notifications && (
										<span className='notification'>{notifications}</span>
									)}
								</LinkItem>
							)
						)}
					</ModuleMenu>
				</Module>
				<Module>
					<ModuleTitle>Game Management</ModuleTitle>
					<ModuleMenu>
						{gameManagementOptions.map(
							({ index, title, icon, notifications, gmOnly }) => (
								<LinkItem
									key={index}
									linkAction={() => handleContent(index)}
									notification={notifications}
									disabled={gmOnly && !isGM}
								>
									<span style={{ display: 'flex', alignContent: 'center' }}>
										<Icon
											width='24px'
											height='20px'
											style={{
												paddingRight: '20px',
												marginLeft: '-4px',
											}}
											icon={icon}
										/>
										{title}
									</span>
									{notifications && (
										<span className='notification'>{notifications}</span>
									)}
								</LinkItem>
							)
						)}
					</ModuleMenu>
				</Module>
			</Container>
		</Wrapper>
	);
};

Sidebar.propTypes = {
	changeContent: func.isRequired,
};

export default Sidebar;
