import styled from 'styled-components';
import { darken, lighten, transparentize } from 'polished';

export default styled.div`
	overflow: hidden;
	width: ${({ navWidth }) => navWidth};
	max-width: ${({ navWidth }) => navWidth};
	height: ${({ navHeight }) => navHeight};
	border-right: 1px solid
		${({ theme }) => transparentize(0.5, theme.sidebar.hover.background)};
	background: ${({ theme }) => {
		const colour =
			theme.mode === 'light'
				? lighten(0.025, theme.console.background)
				: darken(0.05, theme.console.background);
		const amnt = theme.mode === 'light' ? 0.16 : 0.25;
		return transparentize(amnt, colour);
	}};
`;
