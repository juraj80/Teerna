import styled from 'styled-components';
import { font, round, space } from '../../../shared';
import {
	blackFillStyles,
	blackOutlineStyles,
	blueFillStyles,
	blueOutlineStyles,
	whiteFillStyles,
	whiteOutlineStyles,
	disabledStyles,
} from './sharedCSS';

export default styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: auto;
	font-size: ${font.size.medium[100]};
	padding: ${space.small[300]} ${space.medium[200]};
	border-radius: ${({ border }) => round[border]};
	margin-top: 16px;
	cursor: pointer;
	transition: 0.3s;
	white-space: nowrap;

	${({ fill, colour }) =>
		fill === 'fill' && colour === 'blue' && blueFillStyles};
	${({ fill, colour }) =>
		fill === 'fill' && colour === 'black' && blackFillStyles};
	${({ fill, colour }) =>
		fill === 'fill' && colour === 'white' && whiteFillStyles};

	${({ fill, colour }) =>
		fill === 'outline' && colour === 'blue' && blueOutlineStyles};
	${({ fill, colour }) =>
		fill === 'outline' && colour === 'black' && blackOutlineStyles};
	${({ fill, colour }) =>
		fill === 'outline' && colour === 'white' && whiteOutlineStyles};

	${({ disabled }) => disabled && disabledStyles};
`;
