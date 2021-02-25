import styled from 'styled-components';
import { font, space } from '../../../../shared';

export default styled.div`
	margin-top: ${space.large[100]};
	text-align: right;
	color: ${({theme}) => theme.text.console};
	font-size: ${font.size.small[200]};
	font-weight: ${font.weight.bold};
`;
