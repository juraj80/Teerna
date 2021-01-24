import { transparentize } from 'polished';
import { colours } from '../../styles';
import { default as dark } from './dark';
import { default as light } from './light';

const base = {
	borderRadius: '14px',
	background: {
		status: {
			success: colours.status.success,
			error: colours.status.error,
			warning: colours.status.warning,
			info: colours.status.info,
			notification: colours.blue.default,
		},
		portal: transparentize(0.4, colours.blue.night),
		gradient: colours.primaries.gradient,
		overlay: transparentize(0.4, colours.grey.medium),
	},
	overlay: {
		blur: {
			small: '4px',
			default: '20px',
		},
	},
	button: {
		background: {
			primary: colours.primaries.yellow,
			secondary: colours.primaries.red,
			accept: colours.status.success,
			cancel: colours.status.error,
			danger: colours.status.warning,
			disabled: colours.grey.lighter,
			cta: colours.primaries.gradient,
		},
		border: 'none',
	},
};

export const lightTheme = { ...base, ...light };
export const darkTheme = { ...base, ...dark };
