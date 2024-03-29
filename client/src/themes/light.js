import { transparentize } from 'polished';
import { images } from '../assets';
import { colours } from '../styles';

export default {
	mode: 'light',
	backgroundImage: images.backgrounds.LightBG,
	backdrop: colours.grey[100],
	bulbToggle: {
		100: transparentize(0.8, '#F0E6ED'),
		200: transparentize(0.8, '#EBCECE'),
		300: transparentize(0.8, '#E6C8C8'),
		400: transparentize(0.8, '#9E8D8D'),
		500: transparentize(0.8, '#999393'),
		600: transparentize(0.8, '#878484'),
		700: transparentize(0.8, '#5C5959'),
		800: transparentize(0.8, '#262626'),
		900: transparentize(0.8, '#FFFFFF'),
		1000: transparentize(0.8, '#000000'),
	},
	console: transparentize(0.5, colours.white),
	icon: colours.grey[300],
	input: 'white',
	modal: 'white',
	bartext: colours.grey[200],
};
