import styled from 'styled-components';
import { darken } from 'polished';
import { order } from '../../../shared';

export default styled.div`
	position: fixed;
	background: ${({ state, theme }) =>
		state === 'entered' ? darken(0.95,theme.background.console) : 'transparent'};
	height: 100vh;
	width: 100vw;
	top: 0;
	left: 0;
	z-index: ${order.modalBackground};
	display: flex;
	align-items: center;
	justify-content: center;
	transition: 0.5s ease;
	pointer-events: auto;
`;
