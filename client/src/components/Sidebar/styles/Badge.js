import { lighten } from 'polished';
import styled from 'styled-components';
import { font, round } from '../../../shared';

export default styled.div`
	font-size: 8px;
	font-weight: ${font.weight.bold};
	background: ${({ theme }) => lighten(0.25, theme.button.orange)};
	color: ${({ theme }) => theme.button.orange};
	width: 54px;
	height: 22px;
	border-radius: ${round.curved};
	display: inline-flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	text-align: center;
 	margin-left: 12px;
`;
