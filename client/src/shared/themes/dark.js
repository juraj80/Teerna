import { transparentize } from 'polished';
import { resources, colours } from '../../styles';

export default {
	name: 'dark',
	app: {
		background: transparentize(0.4, colours.black.light),
		text: colours.white.medium,
		border: transparentize(0.25, colours.grey.midDark),
		inactive: transparentize(0.78, colours.grey.medium),
	},
	modal: {
		background: `url('${resources.backgrounds.base}')`,
		text: colours.white.lighter,
	},
	button: {
		background: {
			base: colours.black.light,
		},
		text: colours.white.lighter,
		inactive: transparentize(0.55, colours.grey.medium),
	},
	overlay: {
		background: colours.blue.dark,
	},
	scrollbar: {
		background: transparentize(0.4, colours.black.darkest),
	},
	searchbar: {
		background: colours.blue.night,
		text: '',
		border: '',
	},
	menu: {
		hover: {
			background: transparentize(0.3, colours.black.light),
		},
	},
	content: {
		title: {
			text: colours.grey.light,
		},
		background: transparentize(0.13, colours.grey.lighter),
	},
	dropdown: {
		background: colours.blue.darker,
		text: colours.white.lightest,
		hover: colours.blue.midDark,
	},
	popup: {
		background: colours.blue.darkest,
	},
};
