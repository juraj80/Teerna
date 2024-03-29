import { transparentize } from 'polished';
import { colours } from '../styles';
import { images } from '../assets';

export default {
	mode: 'dark',
	backgroundImage: images.backgrounds.DarkBG,
	backdrop: colours.grey[300],
	bulbToggle: {
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
	console: transparentize(0.3, colours.grey[300]),
	icon: colours.white,
	input: colours.grey[200],
	modal: 'black',
	bartext: colours.white,
};

// @ACCESSIBILITY TIP
// 50% opacity text
// frosty texture? 20% opacity text
