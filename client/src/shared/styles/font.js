import { sizeDown, sizeUp } from './utils';

export const defaultSize = 16;

export default {
	family: {
		body: "'Poppins', sans-serif",
		code: "'code-saver', sans-serif",
	},
	weight: {
		extrathin: '200',
		thin: '300',
		regular: '500',
		bold: '600',
		extrabold: '700',
	},
	size: {
		small: {
			100: `${sizeDown(0.75, defaultSize)}px`,
			200: `${sizeDown(0.5, defaultSize)}px`,
			300: `${sizeDown(0.25, defaultSize)}px`,
		},
		medium: {
			100: `${defaultSize}px`, // 16px
			200: `${sizeUp(0.25, defaultSize)}px`,
			300: `${sizeUp(0.5, defaultSize)}px`,
		},
		large: {
			100: `${sizeUp(0.75, defaultSize)}px`,
			200: `${sizeUp(1, defaultSize)}px`,
			300: `${sizeUp(1.25, defaultSize)}px`,
		},
	},
};
