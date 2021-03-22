import styled from 'styled-components';
import { zIndex } from '../../../styles';

export default styled.div`
	position: fixed;
	background: ${({ state, theme }) =>
		state === 'entered' ? theme.backdrop: 'transparent'};
	height: 100vh;
	width: 100vw;
	top: 0;
	left: 0;
	${zIndex('top')};
	display: flex;
	align-items: center;
	justify-content: center;
	transition: 0.3s ease;
	pointer-events: auto;
`;
