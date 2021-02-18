import styled from 'styled-components';
import { space } from '../../../shared';

export default styled.div`
	flex-basis: ${({ navWidth }) => navWidth};
	/* border-right: 2px solid ${({ theme }) => theme.sidebar.border}; */
	padding: ${space.large[100]} 0;
	overflow: auto;
	/* flex-shrink: 0; */
`;
