import base from './base';
import light from './lightTheme';
import dark from './darkTheme';

export const lightTheme = { ...light, ...base };
export const darkTheme = { ...dark, ...base };
