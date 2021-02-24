import { sizeUp, sizeDown } from './utils';

const defaultSpacing = 8;

export default {
	small: {
		100: `${sizeDown(0.75, defaultSpacing)}px`,
		200: `${sizeDown(0.5, defaultSpacing)}px`,
		300: `${defaultSpacing}px`, // 8px
	},
	medium: {
		100: `${sizeUp(1, defaultSpacing)}px`, // 16px
		200: `${sizeUp(1.5, defaultSpacing)}px`,
		300: `${sizeUp(2, defaultSpacing)}px`,
	},
	large: {
		100: `${sizeUp(3, defaultSpacing)}px`, // 32px
		200: `${sizeUp(3.5, defaultSpacing)}px`,
		300: `${sizeUp(4, defaultSpacing)}px`,
	},
};
