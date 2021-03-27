import { transparentize, darken } from 'polished';
import { css } from 'styled-components';
import { colours, gradients } from '../styleMaps';
import { elevation } from '../cssObjects';
import { oneOf, string } from 'prop-types';

/**
 * @function frostedGlass - returns css object to give a `frosted` glass effect
 * @param {string} colour - the colour of the glass background
 * @param {string} type - the type of the card, (status or accent)
 * @param {string} payload - the colour/status associated with the type provided
 * @returns {import('styled-components').CSSObject}
 */
export const frostedGlass = (
	colour = 'white',
	type = undefined,
	payload = undefined,
	dark = false,
) => {
	let glassColour = colour;
	if (type && payload) {
		if (type === 'status') glassColour = colours.status[payload];
		else if (type === 'accent') glassColour = colours.accent[payload];
	}

	if (dark) glassColour = darken(0.5, glassColour);

	return css`
		background: ${gradients.border};
		overflow: hidden;
		&:before {
			background: ${transparentize(0.3, glassColour)};
			backdrop-filter: blur(20px) saturate(100%) contrast(45%) brightness(130%);
			content: '';
			position: absolute;
			left: 1px;
			top: 1px;
			height: 100%;
			width: 100%;
			margin: 1px;
		}
	`;
};

frostedGlass.propTypes = {
    colour: string,
    type: oneOf(['status', 'accent']),
    payload: string,
}