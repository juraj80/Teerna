import styled, { css } from 'styled-components';
import { darken, lighten, opacify } from 'polished';
import { font, space } from '../../../shared';

export default styled.li`
	display: flex;
	align-items: center;
	color: ${({ theme }) => theme.text.sidebar};
	padding: 0 ${space.medium[300]} ${space.medium[300]} ${space.medium[100]};
	margin: 0;
	font-size: ${font.size.small[300]};
	font-weight: ${font.weight.regular};
	transition: transform 1s;
	cursor: ${({ disabled }) => (disabled ? 'no-cursor' : 'pointer')};

	&:hover {
		transform: translateX(0.5px);
		color: ${({ theme }) => theme.text.hover.sidebar};
		border-left: 4px solid ${({ theme }) => theme.border.sidebar};
	}

	${({chatOption, theme}) => chatOption && css`
		position: absolute;
		bottom: ${space.small[200]};
		font-weight: ${font.weight.bold};
		color: ${theme.mode === 'dark' ? darken(0.25, theme.text.sidebar) : opacify(0.25, theme.text.sidebar)};
		&:hover {
			color: ${({ theme }) => theme.text.hover.sidebar};
			border-color:  ${theme.mode === 'dark' ? darken(0.25, theme.border.sidebar) : opacify(0.25, theme.border.sidebar)};
		}

		& svg {
			fill: ${theme.mode === 'dark' ? darken(0.25, theme.text.sidebar) : opacify(0.25, theme.text.sidebar)};
			&:hover {
				fill: ${theme.mode === 'dark' ? darken(0.25, theme.text.sidebar) : opacify(0.25, theme.text.sidebar)};
			}
		}
	`};
`;
