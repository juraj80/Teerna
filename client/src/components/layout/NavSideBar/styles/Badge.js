import { lighten } from 'polished';
import styled from 'styled-components';
import { font, borderRadius, colours } from '../../../../styles';

export default styled.div`
	${font(1, 'TITLE', false)};
	font-size: 9px;
	background: ${colours.accent.orange};
	color: ${lighten(0.8, colours.accent.orange)};
	width: 54px;
	height: 22px;
	border-radius: ${borderRadius.round};
	display: inline-flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	text-align: center;
 	margin-left: 12px;
`;
