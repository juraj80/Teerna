import styled, { css } from 'styled-components';
import { space } from '../../../shared';

const hoverStyle = css`
	color: ${({ theme }) => theme.text.hover.headerbar};
	border-bottom: 3px solid ${({ theme }) => theme.text.hover.headerbar};
`;

export default styled.li`
	width: 100%;
	color: ${({ theme }) => theme.text.headerbar};
	padding: ${space.small[300]} ${space.medium[300]};
	border-bottom: 3px solid transparent;
	transition: 0.4s;
	height: 32px;
	vertical-align: center;
    
	&:hover {
		${hoverStyle};
		cursor: pointer;
	}
`;
