import { useEffect, useState } from 'react';

/**
 * @returns {Array<string, Function, Boolean>} 
 * - the string `light`/`dark` associated with the current theme
 * - the function which toggle the theme
 * - the bool value of whether the component has mounted yet
 */
export default function useDarkMode() {
	const [theme, setTheme] = useState('light');
	const [componentMounted, setComponentMounted] = useState(false);

	const setMode = mode => {
		window.localStorage.setItem('theme', mode);
		setTheme(mode);
	};

	const toggleTheme = () => theme === 'light' ? setMode('dark') : setMode('light');

	useEffect(() => {
		const localTheme = window.localStorage.getItem('theme');
		window.matchMedia 
        && window.matchMedia('(prefers-color-scheme: dark)').matches 
        && !localTheme
		    ? setMode('dark')
			: localTheme
			? setTheme(localTheme)
			: setMode('light');
		setComponentMounted(true);
	}, []);

	return [theme, toggleTheme, componentMounted];
}