import { lighten } from 'polished';
import styled from 'styled-components';
import { font, borderRadius, colours } from '../../../../styles';

export default styled.div`
	${font(1, 'TITLE', false)};
	font-weight: 400;
	font-size: 10px;
	background: ${colours.accent.aqua};
	color: ${colours.grey[200]};
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
