import styled from 'styled-components';
import { font, round } from '../../../shared';

export default styled.div`
	background-color: ${({ theme }) => theme.console.background};
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	max-width: ${({ consoleWidth }) => consoleWidth}px;
	max-height: ${({ consoleHeight }) => consoleHeight}px;
	overflow: hidden;
	border-radius: ${round.regular};
	backdrop-filter: blur(20px);
	-webkit-backdrop-filter: blur(20px);
	font-size: ${font.size.medium[100]};
	font-weight: ${font.weight.regular};
`;
