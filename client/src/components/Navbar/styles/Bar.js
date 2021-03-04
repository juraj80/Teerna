import styled from 'styled-components';
import { mediaQuery, space } from '../../../shared';

export default styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-shrink: 0;
	height: 64px;
	width: 100%;
	border-bottom: 1px solid ${({ theme }) => theme.navbar.border};
	white-space: nowrap;

	@media screen and (${mediaQuery.xs}) {
		padding: 0 ${space.medium[100]};
	}
`;
