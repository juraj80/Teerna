import styled, { css } from 'styled-components';
import { transparentize } from 'polished';
import { colours, font, mediaQuery, spacing } from '../../../../styles';

export default styled.div`
	${({ logo }) =>
		logo &&
		css`
			display: grid;
			grid: repeat(1, 64px) / 56px repeat(6, 40px);
			${font(5, 'DISPLAY', false)};
			color: ${({theme})=>transparentize(0.4, theme.mode === 'light' ? colours.grey[300] : colours.white)};
			text-align: center;
			background: repeating-linear-gradient(
				90deg,
				${transparentize(0.9, colours.white)} 0,
				${transparentize(0.9, colours.white)} 5px,
				transparent: 5px,
				transparent: 10px
			);
			@media screen and (${mediaQuery.xs}) {
				grid-column: span 1;
				background: ${transparentize(0.9, colours.white)};
			}

			& span {
				padding-top: ${spacing[8]};

				&:nth-child(odd) {
					background: ${transparentize(0.85, colours.accent.purple)};
				}
				&:nth-child(even) {
					background: ${transparentize(0.9, colours.accent.purple)};
					color:${({theme})=>transparentize(0.4, theme.mode === 'light' ? colours.grey[300] : colours.white)};
				}
				&:first-child{
					background: transparent;
					vertical-align: center;
					& img {
						height: 48px;
						${({theme}) => theme.mode === 'dark' && css`
							filter: invert(0.75);
						`};
					}
				}
			}
		`}
`;
