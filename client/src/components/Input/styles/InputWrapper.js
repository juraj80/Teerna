import styled from 'styled-components';
import { round, space } from '../../../shared';

export default styled.div`
	height: 40px;
	display: flex;
	width: 320px;
	max-width: 400px;
	border-radius: ${round.minimal};
	padding-left: ${({ withIcon }) =>
		withIcon ? space.medium[100] : space.small[100]};
	display: flex;
	align-items: center;

	svg {
		margin-right: ${space.small[300]};
	}

	&:focus {
		outline: none;
	}
`;
