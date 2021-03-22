import { rgb, rgba, transparentize, linearGradient } from 'polished';

/**
 * @object rgb values corresponding to common colours used
 */
export const colours = {
	white: rgb(255, 255, 255),
	grey: {
		100: rgb(69, 70, 74),
		200: rgb(28, 24, 51),
		300: rgb(27, 23, 51),
	},
	accent: {
		white: rgb(250,250,250),
		orange: rgb(250, 102, 14),
		// 	200: rgb(253, 90, 39),
		purple: rgb(163, 60, 250),
		// 	200: rgb(118, 74, 197),
		pink: rgb(240, 101, 210),
		mint: rgb(51, 245, 139),
		aqua: rgb(12, 224, 245),
			// 200: rgb(66, 203, 254),
			// 300: rgb(5, 171, 255),
			// 300: rgb(0, 142, 254),
		
	},
	status: {
		success:rgb(102, 255, 102),
		error: rgb(255, 53, 94),
		info: rgb(80, 191, 230),
		warning: rgb(255, 204, 51),
		disabled: rgb(32, 35, 52),
	}
};

/**
 * @object gradients - the gradients used regularly, a special one for border (glass effect)
 */
export const gradients = {
	default: linearGradient({
		colorStops: [
			transparentize(0.6, colours.white),
			transparentize(0.9, colours.white),
		],
		fallback: transparentize(0.2, colours.white),
		toDirection: 'to bottom right',
	}),
	border: linearGradient({
		colorStops: [
			transparentize(0.5, colours.white),
			colours.white,
			colours.accent.aqua,
			transparentize(0.5, colours.accent.aqua),
		],
		fallback: transparentize(0.5, colours.white),
		toDirection: 'to bottom right',
	}),
};
