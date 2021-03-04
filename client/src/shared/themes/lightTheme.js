import { darken, transparentize } from 'polished';
import { colour } from '../styles';

export default {
	mode: 'light',
	console: {
		background: transparentize(0.69, colour.white[100]),
		text: transparentize(0.1, colour.white[160]),
		centre: transparentize(0.35, colour.turquoise[100]),
	},
	navbar: {
		background: transparentize(0.69, colour.white[100]),
		text: transparentize(0.45, colour.white[100]),
		border: transparentize(0.85, colour.white[100]),
		hover: {
			text: transparentize(0.25, colour.white[100]),
		},
	},
	appbar: {
		background: transparentize(0.69, colour.white[100]),
		text: transparentize(0.1, colour.white[160]),
		border: transparentize(0.85, colour.white[160]),
		hover: {
			text: colour.white[100],
			background: transparentize(0.65, colour.grey[110]),
			border: transparentize(0.65, colour.grey[110]),
		},
	},
	sidebar: {
		background: transparentize(0.69, colour.white[100]),
		text: transparentize(0.1, colour.white[160]),
		border: transparentize(0.85, colour.white[150]),
		hover: {
			text: colour.white[100],
			background: transparentize(0.65, colour.grey[140]),
		},
	},
	leftSidebar: {
		background: transparentize(0.69, colour.white[100]),
		text: transparentize(0.1, colour.white[160]),
		hover: {
			text: colour.white[100],
			background: transparentize(0.65, colour.grey[140]),
		},
	},
	modal: {
		background: transparentize(0.15, colour.white[160]),
		backdrop: transparentize(0.15, colour.grey[300]),
		inverse: {
			background: transparentize(0.15, colour.grey[250]),
			text: transparentize(0.35, colour.white[160]),
		},
	},
	button: {
		text: colour.grey[280],
		background: colour.white[100],
		inverse: {
			text: colour.white[100],
			background: colour.grey[280],
		},
		hover: {
			background: colour.grey[230],
			text: colour.white[110],
		},
		disabled: {
			background: colour.grey[140],
			text: colour.grey[280],
		},
	},
	input: {
		background: colour.white[110],
		text: colour.grey[250],
		disabled: {
			background: colour.grey[140],
		},
	},
	tooltip: {
		background: colour.white[150],
		text: colour.white[100],
	},
	gmToggle: {
		100: transparentize(0.8, '#F0E6ED'),
		200: transparentize(0.8, '#EBCECE'),
		300: transparentize(0.8, '#E6C8C8'),
		400: transparentize(0.8, '#9E8D8D'),
		500: transparentize(0.8, '#999393'),
		600: transparentize(0.8, '#878484'),
		700: transparentize(0.8, '#5C5959'),
		800: transparentize(0.8, '#262626'),
		900: transparentize(0.8, colour.white[160]),
		1000: transparentize(0.8, '#000000'),
	},
};
