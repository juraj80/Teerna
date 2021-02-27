import {  transparentize } from 'polished';
import { colour } from '../styles';

export default {
	mode: 'light',
    background: {
		card: transparentize(0.13, colours.grey[60]),
		console: transparentize(0.5, colour.white),
		centre: transparentize(0.5, colour.grey[0]),
		navbar: transparentize(0.5, colour.grey[20]),
		appbar: transparentize(0.5, colour.grey[40]),
		sidebar: transparentize(0.5, colour.grey[60]),
		modal: '',
		button: colour.blue[0],
		input: colour.grey[20],
		tooltip: colour.grey[160],
		hover: {
			navbar: transparentize(0.3, colour.grey[0]),
			appbar: transparentize(0.3, colour.grey[20]),
			sidebar: transparentize(0.3, colour.grey[40]),
			button: '',
		},
	},
	text: {
		alert: colour.grey[300],
		console: colour.grey[240],
		centre: colour.black,
		navbar: colour.grey[240],
		appbar: colour.grey[220],
		sidebar: colour.grey[240],
		modal: '',
		button: '',
		input: colour.grey[280],
		tooltip: colour.black,
		hover: {
			navbar: colour.grey[260],
			appbar: colour.grey[240],
			sidebar: colour.grey[260],
			button: '',
		},
	},
	border: {
		navbar: colour.grey[240],
		appbar: colour.grey[220],
		sidebar: colour.grey[240],
		modal: '',
		input: colour.grey[280],
	},
 	themeToggle: {
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
    }
};
