import { useState, useEffect } from 'react';
import { space } from '../shared';

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
				width: windowSize.width - Number(space.medium[300].replace('px', '')),
				height: windowSize.height - Number(space.large[100].replace('px', '')),
			});
	}, [windowSize]);

	return consoleSize;
}
