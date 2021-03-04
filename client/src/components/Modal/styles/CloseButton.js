import styled from 'styled-components';
import { font, order, space } from '../../../shared';

export default styled.button`
	font-size: ${font.size.medium[200]};
	font-weight: ${font.weight.bold};
	margin-right: ${space.small[100]};
	border: none;
	outline: none;
	border-radius: none;
	background: 'transparent';
	color: ${({ theme }) => theme.button.text};
	padding: 0 ${space.large[100]};
	cursor: pointer;
	&:hover {
		color: ${({ theme }) => theme.button.hover.text};
	}
	z-index: ${order.overlay.modal};
`;
