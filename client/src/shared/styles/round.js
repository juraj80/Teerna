import { sizeUp, sizeDown } from './utils';

const defaultRounding = 8;

export default {
	square: `${sizeDown(0.75, defaultRounding)}px`,
	minimal: `${sizeDown(0.5, defaultRounding)}px`,
	regular: `${defaultRounding}px`,
	exaggerated: `${sizeUp(1, defaultRounding)}px`,
	round: '50%',
};
