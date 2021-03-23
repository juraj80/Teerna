import styled, { css } from 'styled-components';
import { darken, invert, opacify } from 'polished';
import { colours, font, gradients, spacing } from '../../../../styles';

export default styled.li`
	display: flex;
	align-items: center;
	color: ${({ theme }) => theme.bartext};
	padding: ${spacing[4]} ${spacing[8]} ${spacing[8]} ${spacing[16]};
	margin: 0;
	${font(2, 'BODY', false)};
	transition: transform 1s;
	cursor: ${({ disabled }) => (disabled ? 'no-cursor' : 'pointer')};

	&:hover {
		transform: translateX(0.5px);
		color: ${colours.white};
		border-left: 4px solid ${colours.accent.orange};
	}


	${({bottom, theme}) => bottom && css`
		position: absolute;
		bottom: ${spacing[8]};
		font-weight: ${font.weight.bold};

		& svg {
			fill: ${theme.mode === 'dark' ? darken(0.25, invert(theme.console)) : opacify(0.25, invert(theme.console))};
			&:hover {
				fill: ${theme.mode === 'dark' ? darken(0.45, invert(theme.console)) : opacify(0.25, invert(theme.console))};
			}
		}
	`};
`;
