import base from './base';
import dark from './dark';
import light from './light';

export const lightTheme = {...light, ...base};
export const darkTheme = {...dark, ...base};