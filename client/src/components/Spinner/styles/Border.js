import { transparentize } from 'polished';
import styled from 'styled-components';
import { colour, round, space, spin } from '../../../shared';

export default styled.div`
	${spin};
    width: 150px;
	height: 150px;
	padding: ${space.small[100]};
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: ${round.circular};
	background: ${colour.turquoise};
	background: linear-gradient(
		0deg,
		${transparentize(0.1, colour.turquoise)} 33%,
		${transparentize(1, colour.turquoise)} 100%
	);
	animation: spin 0.8s linear 0s infinite;
`;
