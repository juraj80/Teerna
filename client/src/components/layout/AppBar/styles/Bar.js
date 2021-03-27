import styled from 'styled-components';
import { lighten } from 'polished';
import { gradients } from '../../../../styles';

export default styled.div`
	max-width: 100%;
	width: ${({ consoleWidth }) => consoleWidth};
	height: 40px;
	background: ${({ theme }) => theme.console};
	border-bottom: 1px solid ${gradients.default};
	display: flex;
	align-items: center;
	justify-content: flex-start;

	svg {
		padding: 0 22px;
		height: 20px;
		width: 28px;
		cursor: pointer;
		path {
			fill: ${({ theme }) =>theme.bartext};
			&:hover {
				color: ${({ theme }) => lighten(0.1, theme.bartext)};
			}
		}
	}
`;
