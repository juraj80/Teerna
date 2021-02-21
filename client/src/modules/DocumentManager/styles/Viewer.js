import styled from 'styled-components';
import { space } from '../../../shared';

export default styled.div`
	width: 70%;
	max-width: 70%;
	max-height: 576px;
	overflow-y: scroll;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: ${space.medium[100]};
	padding-top: ${space.small[200]};
`;
