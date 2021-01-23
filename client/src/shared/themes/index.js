import { transparentize } from 'polished';
import { colours } from '../../styles';
import { default as dark } from './dark';
export { default as light } from './light';

const base = {
	background: {
		status: {
			success: colours.status.success,
			error: colours.status.error,
			warning: colours.status.warning,
			info: colours.status.info,
			notification: colours.blue.default,
		},
		portal: transparentize(0.4, colours.blue.night),
	},
};

export const lightTheme = { ...base, light };
export const darkTheme = { ...base, dark };
