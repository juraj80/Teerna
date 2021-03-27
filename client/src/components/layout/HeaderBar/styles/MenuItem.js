import styled, { css } from 'styled-components';
import { invert, opacify } from 'polished';
import { spacing } from '../../../../styles';

const hoverStyle = css`
	color: ${({ theme }) => opacify(0.8, invert(theme.console))};
	border-bottom: 3px solid ${({ theme }) => invert(theme.console)};
`;

export default styled.li`
	width: 100%;
	color: ${({ theme }) => invert(theme.console)};
	padding-top: ${spacing[16]};
	border-bottom: 3px solid transparent;
	transition: 0.4s;
	height: 32px;
	vertical-align: center;
	display: flex;
	justify-content: space-around;

	

	&:hover {
		${hoverStyle};
		cursor: pointer;
	}
`;
