import { useContext, useEffect, useState } from 'react';
// import {} from 'prop-types';
import { Redirect } from 'react-router-dom';
import decode from 'jwt-decode';
import { PlayerContext } from '../../contexts';
import { Icon } from '../';
import { Wrapper, Container, Module, ModuleTitle, ModuleMenu } from './styles';
import { LinkItem } from './components';
import { gmOptions, playerOptions } from './data';
import { useConsoleSize, useSetCentreContent } from '../../hooks';

const Sidebar = () => {
	const { width, height } = useConsoleSize();
	const { setCentreContent } = useSetCentreContent();
	const { isGM } = useContext(PlayerContext);
	const [user, setUser] = useState(undefined);
	const [action, updateAction] = useState('');
	const [options, setOptions] = useState([]);

	useEffect(() => {
		let userToken = localStorage.getItem('token');
		userToken && setUser(decode(userToken));
	}, []);

	useEffect(() => {
		user && isGM ? setOptions(gmOptions) : setOptions(playerOptions);
	}, [isGM, user]);

	useEffect(() => {
		action !== 'openChat' && setCentreContent(action);
	}, [action]);

	if (!user) return <Redirect to='/' />;

	return (
		<Wrapper navWidth={`${width * 0.15}px`} navHeight={`${height - 48}px`}>
			<Container navWidth={`${width * 0.15}px`}>
				{options.map(({ id, title, options }) => (
					<Module key={id}>
						<ModuleTitle>{title}</ModuleTitle>
						<ModuleMenu>
							{options.map(
								({ tabTitle, tabAction, tabIcon, notifications }) => (
									<LinkItem
										key={tabTitle}
										linkAction={() => tabAction && updateAction(tabAction)}
										notification={notifications}
									>
										<span>
											<Icon
												width='24px'
												height='20px'
												style={{
													paddingRight: '20px',
													marginLeft: '-4px',
												}}
												icon={tabIcon}
											/>
											{tabTitle}
										</span>
										{notifications && (
											<span className='notification'>{notifications}</span>
										)}
									</LinkItem>
								)
							)}
						</ModuleMenu>
					</Module>
				))}
			</Container>
		</Wrapper>
	);
};

Sidebar.propTypes = {
	//
};

export default Sidebar;
