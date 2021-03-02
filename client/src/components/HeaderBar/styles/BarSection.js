import { transparentize } from 'polished';
import styled, { css } from 'styled-components';
import { colour } from '../../../shared';

export default styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	${({ left, theme }) =>
		left &&
		css`
			background: ${transparentize(0.25, theme.background.headerbar)};
		`};
	${({ left, middle, right, consoleWidth }) => {
		return right
			? css`
					justify-content: space-around;
					width: 425px;
			  `
			: middle
			? css`
					width: auto;
					min-width: calc(${consoleWidth} - 650px);
			  `
			: left &&
			  css`
					justify-content: flex-start;
					width: 275px;
			  `;
	}};
`;
