import styled from 'styled-components';
import { round, space } from '../../../shared';

export default styled.img`
	width: 28px;
	height: auto;
	border-radius: ${round.square};
	margin-right: ${space.small[300]};
	flex-shrink: 0;
`;
