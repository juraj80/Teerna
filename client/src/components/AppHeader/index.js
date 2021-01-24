import styled from 'styled-components';
import LogoSubHeader from './LogoSubHeader';
import { MiddleSubHeader } from './MiddleSubHeader';
import { ProfileSubHeader } from './ProfileSubHeader';

const StyledHeader = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	flex-shrink: 0;
	min-height: 64px;
	min-width: 90vw;
	width: 100%;
	border-bottom: 1px solid ${({ theme }) => theme.app.border};
	padding: 0 30px;
	white-space: nowrap;
	@media screen and (max-width: 480px) {
		padding: 0 16px;
	}
`;

const AppHeader = ({ toggleTheme }) => {
	return (
		<StyledHeader>
			<LogoSubHeader toggleTheme={toggleTheme} />
			<MiddleSubHeader />
			<ProfileSubHeader />
		</StyledHeader>
	);
};

export default AppHeader;
