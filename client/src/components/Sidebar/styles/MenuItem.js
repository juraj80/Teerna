import styled from 'styled-components';
import { font, space } from '../../../shared';

export default styled.li`
	display: flex;
	align-items: center;
	color: ${({ theme }) => theme.text.sidebar};
	padding: 0 ${space.medium[300]} ${space.medium[300]} ${space.medium[100]};
	margin: 0;
	font-size: ${font.size.small[300]};
	font-weight: ${font.weight.regular};
	transition: transform 1s;
	cursor: ${({ disabled }) => (disabled ? 'no-cursor' : 'pointer')};

	&:hover {
		transform: translateX(0.5px);
		color: ${({ theme }) => theme.text.hover.sidebar};
		border-left: 4px solid ${({ theme }) => theme.border.sidebar};
	}

`;
