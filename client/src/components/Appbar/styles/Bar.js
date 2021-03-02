import styled from 'styled-components';
import { lighten } from 'polished';
import { space } from '../../../shared';

export default styled.div`
	width: ${({ consoleWidth }) => consoleWidth};
	height: 40px;
	background: ${({ theme }) => theme.background.appbar};
	border-bottom: ${({ theme }) => theme.border.appbar};
	display: flex;
	align-items: center;
	justify-content: flex-start;
	padding-left: ${space.small[300]};

	svg {
		cursor: pointer;
		fill: ${({theme}) => theme.text.appbar};
		&:hover {
			color: ${({ theme }) => lighten(0.1, theme.background.appbar)};
		}
	}
`;
