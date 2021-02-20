import { transparentize } from 'polished';
import styled, { css } from 'styled-components';
import { colour, font, round, space } from '../../../shared';
import {
	// 	blackFillStyles,
	// 	blackOutlineStyles,
	// 	blueFillStyles,
	// 	blueOutlineStyles,
	// 	whiteFillStyles,
	// 	whiteOutlineStyles,
	disabledStyles,
} from './sharedCSS';

// export default styled.button`
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// 	width: auto;
// 	font-size: ${font.size.medium[100]};
// 	padding: ${space.small[300]} ${space.medium[200]};
// 	border-radius: ${({ border }) => round[border]};
// 	margin-top: 16px;
// 	cursor: pointer;
// 	transition: 0.3s;
// 	white-space: nowrap;

// 	${({ fill, colour }) =>
// 		fill === 'fill' && colour === 'blue' && blueFillStyles};
// 	${({ fill, colour }) =>
// 		fill === 'fill' && colour === 'black' && blackFillStyles};
// 	${({ fill, colour }) =>
// 		fill === 'fill' && colour === 'white' && whiteFillStyles};

// 	${({ fill, colour }) =>
// 		fill === 'outline' && colour === 'blue' && blueOutlineStyles};
// 	${({ fill, colour }) =>
// 		fill === 'outline' && colour === 'black' && blackOutlineStyles};
// 	${({ fill, colour }) =>
// 		fill === 'outline' && colour === 'white' && whiteOutlineStyles};

//
// `;

export default styled.button`
	position: relative;
	margin-top: 16px;
	padding: ${space.small[300]} ${space.large[200]};
	color: ${({ disabled }) =>
		disabled ? colour.black[100] : colour.white[110]};
	font-size: ${font.size.medium[100]};
	font-weight: ${font.weight.extrathin};
	overflow: hidden;
	background: ${transparentize(0.1, colour.white[100])};
	box-shadow: 0 5px 5px ${transparentize(0.2, colour.black[100])};
	border-radius: ${({ border }) => round[border]};
	transition: 0.3s;
	border: none;
	cursor: pointer;

	${props => {
		let currColour = props.status
			? colour.status[props.status]
			: props.colour === 'blue'
			? colour.blue[100]
			: props.colour === 'black'
			? colour.black[100]
			: props.colour === 'error'
			? colour.status.error
			: colour.white[100];

		return props.fill === 'outline'
			? css`
					border: 1px solid ${transparentize(0.1, currColour)};
			  `
			: css`
					background: ${transparentize(0.8, currColour)};
			  `;
	}};

	&:hover {
		& span {
			&:first-child {
				width: 100%;
				transform: translateX(100%);
			}
			&:nth-child(2) {
				height: 100%;
				transform: translateX(100%);
			}
			&:nth-child(3) {
				width: 100%;
				transform: translateX(-100%);
			}
			&:last-child {
				height: 100%;
				transform: translateY(-100%);
			}
		}

		&:after {
			left: 100%;
		}
	}

	&:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 50%;
		height: 100%;
		background: ${transparentize(0.9, colour.white[100])};
	}

	&:after {
		content: '';
		position: absolute;
		top: 0;
		left: -100%;
		width: 100%;
		height: 100%;
		background: linear-gradient(
			90deg,
			transparent,
			${transparentize(0.4, colour.white[100])},
			transparent
		);
		transition: 0.5s;
		transition-delay: 0.5s;
	}

	& span {
		position: absolute;
		display: block;
		transition: 0.5s ease;

		&:first-child {
			top: 0;
			left: 0;
			width: 0;
			height: 1px;
			background: ${colour.white[100]};
		}

		&:nth-child(2) {
			top: 0;
			left: 0;
			width: 1px;
			height: 0;
			background: ${colour.white[100]};
		}

		&:nth-child(3) {
			bottom: 0;
			right: 0;
			width: 0;
			height: 1px;
			background: ${colour.white[100]};
		}
		&:last-child {
			bottom: 0;
			right: 0;
			width: 1px;
			height: 0;
			background: ${colour.white[100]};
		}
	}

	${({ disabled }) => disabled && disabledStyles};
`;
