import styled from 'styled-components';
import { round } from '../../../shared';

export default styled.input`
	position: relative;
	width: 220px;
	border-radius: ${round.curved};
	height: 36px;
	display: flex;
	align-items: center;
	overflow: hidden;
	flex-shrink: 0;
`;
