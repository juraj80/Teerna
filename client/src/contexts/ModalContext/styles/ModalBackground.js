import styled from 'styled-components';
import { order } from '../../../shared';

export default styled.div`
	position: fixed;
	background: ${({ state, theme }) =>
		state === 'entered' ? theme.modal.backdrop : 'transparent'};
	height: 100vh;
	width: 100vw;
	top: 0;
	left: 0;
	z-index: ${order.overlay.blurBackground};
	display: flex;
	align-items: center;
	justify-content: center;
	transition: 0.5s ease;
	pointer-events: auto;
`;
