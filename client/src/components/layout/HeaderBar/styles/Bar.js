import { opacify, transparentize } from 'polished';
import styled from 'styled-components';
import { mediaQuery, spacing } from '../../../../styles';

export default styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-shrink: 0;
	height: 60px;
	width: 100%;
	max-width: ${({consoleWidth}) => consoleWidth};
	background: ${({theme}) => theme.mode === 'light' ? transparentize(0.4, theme.console) : opacify(0.1, theme.console)};

	@media screen and (${mediaQuery.xs}) {
		padding: 0 ${spacing[8]};
	}
`;
