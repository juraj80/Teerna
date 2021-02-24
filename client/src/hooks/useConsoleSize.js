import { useEffect, useState } from 'react';
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
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}

		window.addEventListener('resize', handleResize);

		handleResize();

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	useEffect(() => {
		windowSize &&
			setConsoleSize({
				width:
					windowSize.width - Number(space.medium[300].replace('px', '')) * 2,
				height:
					windowSize.height - Number(space.large[100].replace('px', '')) * 2,
			});
	}, [windowSize]);

	return consoleSize;
}
