import styled from 'styled-components';
import { mediaQuery, space } from '../../../shared';

export default styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-shrink: 0;
	height: 64px;
	width: 100%;
	max-width: ${({consoleWidth}) => consoleWidth};
	border-bottom: 2px solid ${({ theme }) => theme.border.headerbar};

	@media screen and (${mediaQuery.xs}) {
		padding: 0 ${space.medium[100]};
	}
`;
