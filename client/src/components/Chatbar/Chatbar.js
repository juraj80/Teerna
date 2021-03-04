import { useContext, useEffect, useState } from 'react';
// import {} from 'prop-types';
import decode from 'jwt-decode';
import { PlayerContext } from '../../contexts';
import { Container, Wrapper } from './styles';
import { useConsoleSize } from '../../hooks';
import { Chat } from '../Chat';
import { Redirect } from 'react-router-dom';

const Chatbar = ({ user }) => {
	const { width, height } = useConsoleSize();
	const { isGM } = useContext(PlayerContext);
	// const [user, setUser] = useState(undefined);
	// const [isActive, setIsActive] = useState(false);
	const [chatView, setChatView] = useState('');

	// get user
	// useEffect(() => {
	// 	let userToken = localStorage.getItem('token');
	// 	userToken && setUser(decode(userToken));
	// }, []);

	// only active if there is a user
	// useEffect(() => {
	// 	user ? setIsActive(true) : setIsActive(false);
	// }, [user]);

	// GM Chat or Player Chat
	useEffect(() => {
		isGM ? setChatView('GM') : setChatView('');
	}, [isGM]);

	return (
		<Wrapper navWidth={`${width * 0.25}px`} navHeight={`${height - 48}px`}>
			<Container navWidth={`${width * 0.25}px`}>
				{chatView === 'GM' ? <div> GM CHAT </div> : <Chat/>}
			</Container>
		</Wrapper>
	);
};

export default Chatbar;
