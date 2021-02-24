import styled from 'styled-components';
import { order, font, round, space } from '../../../shared';

export default styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 120px;
	padding: 0 0 ${space.small[100]} 0;
	background: ${({ theme }) => theme.modal.inverse.background};
	margin-bottom: ${space.medium[100]};
	color: ${({ theme }) => theme.modal.inverse.text};
	font-size: ${({ size }) => {
		let fontSize = font.size.medium[200];
		if (size) {
			size === 'small' && (fontSize = font.size.medium[100]);
			size === 'large' && (fontSize = font.size.large[100]);
		}
		return fontSize;
	}};
	font-weight: ${({ size }) => {
		let fontWeight = font.weight.bold;
		if (size && size === 'small') fontWeight = font.weight.extabold;
		return fontWeight;
	}};
	line-height: 1.2;
	text-transform: uppercase;
	border-top-right-radius: ${round.minimal};
	border-top-left-radius: ${round.minimal};
	z-index: ${order.overlay.modal};
`;
