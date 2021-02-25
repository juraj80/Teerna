import styled from 'styled-components';
import { round, space } from '../../../../shared';

export default styled.div`
	margin-top: ${space.small[100]};
	border-radius: ${round.square};
	background-color: ${({theme}) => theme.text.navbar};
	height: 8px;
	overflow: hidden;
`;
