import styled from 'styled-components';
import { space } from '../../../shared';

export default styled.h1`
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${({ theme }) => theme.modal.text};
	margin: 0 0 ${space.small[300]} 0;
`;
