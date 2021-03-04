import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';
import { colour, space, round, font } from '../../../shared';

export default styled.div`
	display: flex;
	align-items: center;
	padding: ${space.small[300]} 0;
	padding-left: ${space.large[200]};
	color: ${({ theme }) => theme.sidebar.text};
	cursor: pointer;

	&:hover {
		background: ${({ theme }) => theme.sidebar.hover.background};
		color: ${({ iconColour, theme }) => {
			let col = iconColour ? darken(0.75, iconColour) : colour.grey[100];
			if (theme.mode === 'light')
				col = iconColour ? lighten(0.75, iconColour) : colour.grey[100];
			return col;
		}};
		& svg path {
			fill: ${({ iconColour, theme }) =>
				iconColour
					? darken(0.75, iconColour)
					: theme.mode === 'light'
					? colour.grey[100]
					: colour.grey[100]};
		}
	}

	& span.notification {
		margin-left: ${space.small[300]};
		border-radius: ${round.round};
		width: 20px;
		height: 20px;
		background-color: ${colour.blue[100]};
		color: ${colour.white[100]};
		font-size: ${font.size.small[200]};
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;
