import { colours, resources } from '../../styles';
import { transparentize } from 'polished';

export default {
	name: 'light',

	app: {
		background: transparentize(0.31, colours.white.lightest),
		text: colours.grey.midDark,
		border: transparentize(0.35, colours.white.lightest),
		inactive: colours.grey.dark,
	},
	modal: {
		background: `url('${resources.backgrounds.wallpaper}')`,
		text: colours.black.default,
	},
	button: {
		background: '',
		text: colours.black.lighter,
		border: '',
		inactive: colours.grey.midDark,
	},
	overlay: {
		background: transparentize(0.3, colours.white.lightest),
		text: '',
		border: '',
	},
	scrollbar: {
		background: transparentize(0.57, colours.white.lighter),
		text: '',
		border: '',
	},
	searchbar: {
		background: transparentize(0.31, colours.white.lightest),
		text: '',
		border: '',
	},
	menu: {
		hover: {
			background: transparentize(0.35, colours.white.lightest),
		},
	},
	content: {
		title: {
			text: colours.grey.midDark,
		},
		background: transparentize(0.13, colours.grey.lighter),
	},
	dropdown: {
		background: colours.white.light,
		text: colours.black.darkest,
		hover: colours.white.darkest,
	},
	popup: {
		background: colours.white.lightest,
	},
};
