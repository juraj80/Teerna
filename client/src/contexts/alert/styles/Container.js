import styled from 'styled-components';
import { zIndex, spacing } from '../../../styles'

export default styled.div`
	position: absolute;
	${zIndex('above')};
	right: ${spacing[8]};
	top: ${spacing[8]};
	pointer-events: auto;
`;
