import styled from 'styled-components';
import { space } from '../../../shared';

export default styled.div`
	flex-basis: ${({ navWidth }) => navWidth};
	padding: ${space.large[100]} 0;
	overflow: auto;
`;
