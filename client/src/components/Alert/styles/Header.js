import styled from 'styled-components';
import { font, space } from '../../../shared';

export default styled.h1`
	font-size: ${font.size.small[300]};
	font-weight: ${font.weight.bold};
	margin: 0 0 ${space.small[100]} 0;
	letter-spacing: 0.9px;
	text-transform: capitalize;
`;
