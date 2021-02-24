import styled from 'styled-components';
import { transparentize } from 'polished';
import { colour, toggleOff, toggleOn, order, round } from '../../../shared';

export const Toggle = styled.div``;

export const CheckerLabel = styled.label`
	${toggleOff};
	z-index: ${order.themeToggle};
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: all 0.2s;
	width: 30px;
	height: 30px;
	border-radius: ${round.round};
	background: ${colour.white[275]};
	box-shadow: 0 10px 10px 0 ${transparentize(0.9, colour.grey[260])};

	&:active {
		width: 28px;
		height: 28px;
		box-shadow: 0 7.5px 7.5px 0 ${transparentize(0.9, colour.grey[180])};

		& ${Toggle} {
			height: 5px;
			width: 5px;
		}
	}

	& ${Toggle} {
		transition: all 0.2s ease-in-out;
		height: 5px;
		width: 5px;
		background: transparent;
		border: 2px solid ${colour.yellow[100]};
		border-radius: ${round.round};
		cursor: pointer;
		animation: toggleOff 0.7s linear forwards;
	}
`;

export const Checker = styled.input`
	display: none;
	${toggleOn};
	&:checked {
		& + ${CheckerLabel} {
			background: ${colour.yellow[100]};
			box-shadow: 0 10px 10px 0
				${({ theme }) => transparentize(0.5, theme.console.background)};

			&:active {
				box-shadow: 0 7.5px 7.5px 0
					${({ theme }) => transparentize(0.7, theme.console.background)};
			}

			& ${Toggle} {
				width: 0;
				background: ${colour.white[100]};
				border-color: transparent;
				border-radius: 30px;
				animation: toggleOn 0.7s linear forwards !important;
			}
		}
	}
`;
