import styled from 'styled-components';
import { order, round } from '../../../shared';

export default styled.img`
	width: 36px;
	height: 36px;
	border-radius: ${round.round};
	object-fit: cover;
	border: none;
	z-index: ${order.avatar};
`;
