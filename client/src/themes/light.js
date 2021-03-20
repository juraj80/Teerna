import { transparentize } from 'polished';
import { images } from '../assets';
import { colours } from '../styles';

export default {
	backgroundImage: `url('${images.backgrounds.LightBG}')`,
	backdrop: colours.white,
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
	icon: transparentize(0.2, colours.grey[300]),
	modal: 'white',
};
