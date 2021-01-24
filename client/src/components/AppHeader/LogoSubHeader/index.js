import styled from 'styled-components';

import { ThemeToggle } from '../../ThemeToggle';

const SpaceWrapper = styled.div`
	width: 120px;
	min-width: 100px;
	display: flex;
	align-items: center;
	justify-content: flex-start;

	& ${ThemeToggle} {
		margin-left: 20px;
	}
`;

export default function LogoSubHeader({ toggleTheme }) {
	return (
		<SpaceWrapper>
			<ThemeToggle toggleTheme={toggleTheme} />
		</SpaceWrapper>
	);
}
