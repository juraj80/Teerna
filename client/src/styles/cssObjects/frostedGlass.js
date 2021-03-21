import { transparentize } from 'polished';
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
	payload = undefined
) => {
	let glassColour = colour;
	if (type && payload) {
		if (type === 'status') glassColour = colours.status[payload];
		else if (type === 'accent') glassColour = colours.accent[payload];
	}

	return css`
		border: 1px solid ${gradients.default};
		border-radius: 4px;
		${elevation(12)};
		position: relative;

		overflow: hidden;
		&:before {
			background-color: ${transparentize(0.3, glassColour)};
			backdrop-filter: blur(20px) saturate(100%) contrast(45%) brightness(130%);
			content: '';
			position: absolute;
			left: 0;
			top: 0;
			height: 100%;
			width: 100%;
		}
	`;
};

frostedGlass.propTypes = {
    colour: string,
    type: oneOf(['status', 'accent']),
    payload: string,
}