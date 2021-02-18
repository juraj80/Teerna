import styled from 'styled-components';
import { transparentize } from 'polished';
import { order, round, space } from '../../../shared';

export default styled.div`
	max-width: ${({ size }) => {
		let width = 400;
		if (size) {
			size === 'small' && (width = 300);
			size === 'large' && (width = 600);
		}
		return width;
	}}px;
	min-height: 120px;
	height: 360px;
	background: ${({ theme }) => theme.modal.background};
	border-radius: ${round.minimal};
	margin-bottom: ${space.large[100]};
	margin-top: ${({ state }) => (state === 'entered' ? '-64px' : '-200vh')};
	box-shadow: 0 0 12px 18px
		${({ theme }) => transparentize(0.95, theme.modal.background)};
	transition: 0.5s;
	z-index: ${order.overlay.modal};
`;
