import styled from 'styled-components';
import { space } from '../../../shared';

export default styled.div`
	&:not(:first-child) {
		margin-top: ${space.medium[100]};
	}
`;
