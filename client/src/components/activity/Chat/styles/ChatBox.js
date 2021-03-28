import styled from 'styled-components';
import { spacing } from '../../../../styles';

export default styled.div`
	width: 100%;
	max-width: 95%;
	height: 45%;
	max-height: 55%;
	position: relative;
	top: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: ${spacing[4]} ${spacing[8]};
`;
