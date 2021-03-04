import styled, { css } from 'styled-components';
import { lighten } from 'polished';
import { colour, order, round } from '../../../shared';

export default styled.div`
	width: 40px;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: ${round.round};
	border: 1px solid;
	cursor: ${({ clickable }) => (clickable ? 'pointer' : 'default')};
	z-index: calc(${order.avatar + 10});
	${({ status, theme }) => {
		const currColour = status ? colour.status[status] : theme.console.text;
		return css`
			border-color: ${currColour};
			background: ${currColour};
		`;
	}};

	&:hover {
		${({ status, theme }) => {
			const currColour = status ? colour.status[status] : theme.console.text;
			return css`
				border-color: ${lighten(0.2, currColour)};
				background: ${lighten(0.2, currColour)};
			`;
		}};
	}
`;
