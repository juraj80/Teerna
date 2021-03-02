import { transparentize } from 'polished';
import styled, { css } from 'styled-components';
import { colour, font, mediaQuery, space } from '../../../shared';

export default styled.div`
	${({ logo }) =>
		logo &&
		css`
			display: grid;
			grid: repeat(1, 64px) / 48px repeat(6, 38px);
			font-weight: ${font.weight.extrabold};
			font-size: calc(${font.size.large[300]} * 1.25);
			/* border-bottom: 1px solid ${({ theme }) => theme.border.headerbar}; */
			color: ${transparentize(0.7, colour.white)};
			text-align: center;
			background: repeating-linear-gradient(
				90deg,
				${transparentize(0.9, colour.white)} 0,
				${transparentize(0.9, colour.white)} 5px,
				transparent: 5px,
				transparent: 10px
			);
			@media screen and (${mediaQuery.xs}) {
				grid-column: span 1;
				background: ${transparentize(0.9, colour.white)};
			}

			& span {
				padding-top: ${space.small[300]};

				&:nth-child(odd) {
					background: ${transparentize(0.85, colour.blue[0])};
				}
				&:nth-child(even) {
					background: ${transparentize(0.9, colour.blue[0])};
					color: ${transparentize(0.7, colour.white)};
				}
				&:first-child{
					background: transparent;
				}
			}
		`}
`;
