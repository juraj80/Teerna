import styled, { css } from 'styled-components';
import { darken, lighten, transparentize } from 'polished';
import { colour, font, order, round, space } from '../../../shared';

const lightColour = css`
	background-image: linear-gradient(
		33deg,
		${transparentize(0.66, colour.grey[130])},
		${transparentize(0.66, darken(0.05, colour.grey[130]))},
		${transparentize(0.66, darken(0.075, colour.grey[130]))}
	);
`;

const darkColour = css`
	background-image: linear-gradient(
		33deg,
		${transparentize(0.66, colour.grey[280])},
		${transparentize(0.66, lighten(0.05, colour.grey[280]))},
		${transparentize(0.66, lighten(0.075, colour.grey[280]))}
	);
`;

export default styled.div`
	position: relative;
	z-index: ${order.tooltip};

	&:before {
		content: '${({ helperText }) => helperText}';
		padding: ${space.small[200]} ${space.medium[200]};
		min-width: 48px;
		max-width: 280px;
		width: max-content;
		width: -moz-max-content;
		border-radius: ${round.minimal};
		font-size: ${font.size.large[200]};
		background-color: ${({ theme }) => theme.tooltip.background};
		${({ theme }) => (theme.mode === 'light' ? lightColour : darkColour)};
		box-shadow: 0px 0px 24px ${({ theme }) =>
			transparentize(0.5, theme.tooltip.background)};
		color: ${({ theme }) => theme.tooltip.text};
		text-align: center;
		white-space: pre-wrap;
		transform: translate(-50%, -5px) scale(0.5);
	}

	&:before,
	&:after {
		position: absolute;
		visibility: hidden;
		opacity: 0;
		left: 50%;
		bottom: calc(100% + 5px);
		pointer-events: none;
		transform: 0.3s;
		will-change: transform;
	}

	&:after {
		content: '';
		border-style: solid;
		border-width: 5px 5px 0px 5px;
		border-color: ${({ theme }) => theme.tooltip.background}
			transparent transparent transparent;
		transition-duration: 0s;
		transform-origin: top;
		transform: translateX(-50%) scaleY(0);
	}

	${({ show }) =>
		show &&
		css`
			&:before {
				transition-delay: 0.3s;
				transform: translate(-50%, -5px) scale(1);
			}

			&:after {
				transition-delay: 0.5s;
				transition-duration: 0.2s;
				transform: translateX(-50%) scaleY(1);
			}

			&:before,
			&:after {
				visibility: visible;
				opacity: 1;
			}
		`};

	${({ position }) =>
		position === 'bottom' &&
		css`
			${({ show }) =>
				show &&
				css`
					&:before {
						transform: translate(-55%, 5px) scale(1);
					}

					&:after {
						transform: translate(-20px, 5px) scaleX(1);
					}
				`};

			&:before {
				transform: translate(-55%, 5px) scale(0.5);
			}

			&:before,
			&:after {
				top: 10px;
				bottom: auto;
			}

			&:after {
				border-width: 0px 5px 5px 5px;
				border-color: transparent transparent
					${({ theme }) => theme.tooltip.backgroup} transparent;
				transform-origin: bottom;
			}
		`};

	${({ position }) =>
		position === 'left' &&
		css`
			${({ show }) =>
				show &&
				css`
					&:before {
						transform: translate(-5px, 50%) scale(1);
					}
					&:after {
						transform: translateY(50%) scaleX(1);
					}
				`};

			&:before {
				transform: translate(-5px, 50%) scale(0.5);
			}

			&:before,
			&:after {
				left: auto;
				right: calc(100% + 5px);
				bottom: 50%;
			}

			&:after {
				border-width: 5px 0px 5px 5px;
				border-color: transparent transparent transparent
					${({ theme }) => theme.tooltip.background};
				transform-origin: left;
				transform: translateY(50%) scaleX(0);
			}
		`};

	${({ position }) =>
		position === 'right' &&
		css`
			${({ show }) =>
				show &&
				css`
					&:before {
						transform: translate(4px, 50%) scale(1);
					}

					&:after {
						transform: translateY(50%) scaleX(1);
					}
				`};

			&:before {
				transform: translate(4px, 50%) scale(0.5);
			}

			&:before,
			&:after {
				left: calc(100% + 5px);
				bottom: 50%;
			}

			&:after {
				border-width: 5px 5px 5px 0px;
				border-color: transparent ${({ theme }) => theme.tooltip.background};
				transform-origin: right;
				transform: translateY(50%) scaleX(0);
			}
		`};
`;
