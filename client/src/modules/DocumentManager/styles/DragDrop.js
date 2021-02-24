import { transparentize } from 'polished';
import styled from 'styled-components';
import { colour, font, space } from '../../../shared';

export default styled.div`
	width: 100%;
	padding: 102px ${space.medium[200]};
	border: 3px dashed ${colour.grey[180]};
	background: ${transparentize(0.3, colour.grey[110])};
	color: ${colour.grey[190]};
	font-weight: ${font.weight.bold};
	text-align: center;
`;
