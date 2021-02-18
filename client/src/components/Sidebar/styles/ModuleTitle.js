import styled from 'styled-components';
import { font, space } from '../../../shared';

export default styled.div`
	padding-left: ${space.large[200]};
	color: ${({ theme }) => theme.sidebar.text};
	font-weight: ${font.weight.regular};
	letter-spacing: 0.1px;
	margin-bottom: ${space.medium[100]};
`;
