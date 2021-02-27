import { sizeUp, sizeDown } from './utils';

const defaultRounding = 12;

export default {
	square: `${sizeDown(1.25, defaultRounding)}px`,
	regular: `${defaultRounding}px`,
	curved: `${sizeUp(0.5, defaultRounding)}px`,
	exaggerated: `${sizeUp(1, defaultRounding)}px`,
	circular:  `${sizeUp(10, defaultRounding)}px`,
};
