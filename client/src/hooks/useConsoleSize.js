import { useState, useEffect } from 'react';
import { spacing } from '../styles';

/**
 * @returns {Object<Number, Number>} - the width and height of the console
 */
export default function useConsoleSize() {
	const [windowSize, setWindowSize] = useState({
		width: undefined,
		height: undefined,
	});
	const [consoleSize, setConsoleSize] = useState({
		width: undefined,
		height: undefined,
	});

	useEffect(() => {
		function handleResize() {
			const { innerWidth, innerHeight } = window;
			setWindowSize({ width: innerWidth, height: innerHeight });
		}
		window.addEventListener('resize', handleResize);
		handleResize();
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	useEffect(() => {
		windowSize &&
			setConsoleSize({
				width: windowSize.width - Number(spacing[32].replace('px', '')),
				height: windowSize.height - Number(spacing[40].replace('px', '')),
			});
	}, [windowSize]);

	return consoleSize;
}
