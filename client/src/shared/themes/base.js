import { rgb } from 'polished';
import { colour } from '../styles';
const { success, error, warning, info, disabled, caution } = colour.status;

export default {
	status: { success, error, warning, info, disabled, caution },
	button: {
		blue: colour.blue[0],
		pink: rgb(239, 135, 65),
		orange: rgb(239,65,92),
		purple: rgb(120, 60, 174),
	},
	card: {
		blue: colour.blue[0],
		pink: rgb(239, 135, 65),
		orange: rgb(239,65,92),
		purple: rgb(120, 60, 174),
	}
};
