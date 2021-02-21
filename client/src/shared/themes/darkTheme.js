import { lighten, transparentize } from 'polished';
import { colour } from '../styles';

export default {
	mode: 'dark',
	console: {
		background: transparentize(0.6, colour.navy[300]),
		text: transparentize(0.1, colour.white[150]),
		centre: transparentize(0.25, lighten(0.15, colour.navy[230])),
	},
	navbar: {
		background: transparentize(0.6, colour.navy[250]),
		text: transparentize(0.05, colour.white[150]),
		border: transparentize(0.85, colour.white[150]),
		hover: {
			text: transparentize(0.05, colour.grey[130]),
		},
	},
	appbar: {
		text: transparentize(0.5, colour.white[150]),
		border: transparentize(0.85, colour.white[150]),
		hover: {
			text: colour.white[160],
			border: colour.white[160],
			background: transparentize(0.5, colour.white[100]),
		},
	},
	sidebar: {
		text: transparentize(0.05, colour.white[150]),
		border: transparentize(0.85, colour.white[150]),
		hover: {
			text: colour.white[100],
			background: transparentize(0.85, colour.grey[110]),
		},
	},
	leftSidebar: {
		text: transparentize(0.05, colour.white[150]),
		border: transparentize(0.85, colour.white[150]),
		background: transparentize(0.9, colour.white[150]),
		hover: {
			text: colour.white[100],
			background: transparentize(0.85, colour.grey[110]),
		},
	},
	modal: {
		background: transparentize(0.65, colour.grey[250]),
		text: colour.white[100],
		backdrop: transparentize(0.15, colour.grey[300]),
		inverse: {
			background: transparentize(0.15, colour.white[150]),
			text: transparentize(0.35, colour.grey[280]),
		},
	},
	button: {
		text: colour.white[100],
		background: colour.grey[250],
		inverse: {
			text: colour.grey[250],
			background: colour.white[100],
		},
		hover: {
			background: colour.grey[230],
			text: colour.white[160],
		},
		disabled: {
			background: colour.grey[140],
			text: colour.white[150],
		},
	},
	input: {
		background: colour.grey[220],
		text: colour.white[150],
		disabled: {
			background: colour.grey[140],
		},
	},
	tooltip: {
		background: colour.grey[230],
		text: colour.white[100],
	},
	gmToggle: {
		100: transparentize(0.5, '#DBDBE9'),
		200: transparentize(0.5, '#A4A4C9'),
		300: transparentize(0.5, '#6D6DA8'),
		400: transparentize(0.5, '#494992'),
		500: transparentize(0.5, '#24247C'),
		600: transparentize(0.5, '#35353D'),
		700: transparentize(0.5, '#35355D'),
		800: transparentize(0.5, '#353553'),
		900: transparentize(0.5, '#35354B'),
		1000: transparentize(0.5, '#353544'),
	},
};
