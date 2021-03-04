import styled, { css } from 'styled-components';
import { font, space } from '../../../shared';

const hoverStyle = css`
	color: ${({ theme }) => theme.navbar.hover.text};
	border-bottom: 3px solid ${({ theme }) => theme.navbar.hover.text};
`;

export default styled.li`
	width: 100%;
	color: ${({ theme }) => theme.navbar.text};
	padding: ${space.small[300]} ${space.medium[300]};
	font-weight: ${font.weight.regular};
	border-bottom: 3px solid transparent;
	transition: 0.4s;
	height: 32px;
	vertical-align: center;

	${({ isActive }) => isActive && hoverStyle};

	&:hover {
		${hoverStyle};
		cursor: pointer;
	}
`;
