import styled from 'styled-components';
import { font } from '../../../shared';

export default styled.div`
	height: 140px;
	font-size: ${font.size.large[200]};
	font-weight: ${font.weight.bold};
	color: ${({ theme }) => theme.console.text};
`;
