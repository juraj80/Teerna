import styled from 'styled-components';
import { order, round } from '../../../shared';

export default styled.div`
	width: 100%;
	height: 100%;
	position: relative;
	right: 0;
	bottom: 0;
	border-radius: ${round.minimal};
	z-index: ${order.overlay.modal};
`;
