import { colour, font } from '../styles';

export default {
	font: {
		family: font.family.body,
		size: font.size.medium[100],
		weight: font.weight.regular,
	},
	spinner: {
		colour: colour.yellow[100],
	},
	alert: {
		text: colour.grey[300],
	},
	status: {
		success: colour.status.success,
		error: colour.status.error,
		warning: colour.status.warning,
		info: colour.status.info,
		disabled: colour.status.disabled,
		caution: colour.status.caution,
	},
};
