
import styled, { css } from 'styled-components';
import { transparentize } from 'polished';
import { spacing } from '../../../../styles';

export default styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	${({ start, theme }) =>
		start &&
		css`
			background: ${transparentize(0.25, theme.console)};
		`};
	${({ start, middle, end, consoleWidth }) => {
		return end
			? css`
					align-items: center;
					justify-content: flex-end;
					width: calc(${consoleWidth/5});
					margin-right: ${spacing[16]};
			  `
			: middle
			? css`
					width: auto;
					min-width:calc(${consoleWidth/5 * 3});
			  `
			: start &&
			  css`
					justify-content: flex-start;
					width: 320px;
			  `;
	}};
`;
