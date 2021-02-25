import styled from 'styled-components';
import { font, round, space } from '../../../shared';

export default styled.div`
	width: 100%;
	padding: ${space.small[300]};
	display: block;
	border-radius: ${round.curved};
	background-color: ${({ theme }) => theme.background.input};
	border: none;
	font-size: ${font.size.small[300]};
`;
