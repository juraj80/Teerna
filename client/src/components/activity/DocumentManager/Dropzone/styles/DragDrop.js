import { transparentize } from 'polished';
import styled from 'styled-components';
import { colours, elevation, frostedGlass, spacing } from '../../../../../styles';

export default styled.div`
	color: ${colours.status.info};
	width: 100%;
	padding: 120px 0;
	font-weight: 500;
	text-align: center;
	${elevation(7)};
	position: relative;
	top: 0;
	left: 0;
	margin: 0;
`;
