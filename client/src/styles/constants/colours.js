import { rgb } from 'polished';

export default {
	black: {
		light: rgb(16, 18, 27),
		dark: rgb(12, 15, 25),
		darkest: rgb(1, 2, 3),
		default: rgb(0, 0, 0),
	},
	white: {
		lightest: rgb(255, 255, 255),
		lighter: rgb(255, 253, 253),
		light: rgb(247, 247, 247),
		medium: rgb(249, 250, 251),
		darkest: rgb(236, 236, 236),
	},
	grey: {
		dark: rgb(51, 51, 51),
		midDark: rgb(60, 58, 58),
		medium: rgb(113, 119, 144),
		light: rgb(153, 155, 165),
		lighter: rgb(146, 151, 179),
		lightest: rgb(249, 250, 251),
	},
	blue: {
		default: rgb(58, 109, 240),
		midDark: rgb(42, 46, 60),
		dark: rgb(36, 39, 59),
		darker: rgb(33, 36, 45),
		darkest: rgb(22, 25, 37),
		night: rgb(20, 22, 43),
	},
	yellow: rgb(255, 206, 69),
	status: {
		success: rgb(95, 207, 101),
		error: rgb(249, 96, 87),
		warning: rgb(248, 206, 82),
		info: rgb(58, 109, 240),
	},
	authOrgs: {
		github: rgb(110, 84, 148),
		google: rgb(219, 68, 55),
	},
};
