import styled from 'styled-components';
import { order, space } from '../../../shared';

export default styled.div`
	position: absolute;
	z-index: ${order.alert};
	right: ${space.small[200]};
	top: ${space.small[200]};
	pointer-events: auto;
`;
