import { any } from 'prop-types';
import { Card } from './styles';
import { useConsoleSize } from '../../hooks';

export default function Console({ children }) {
	const { width, height } = useConsoleSize();

	return (
		<Card consoleWidth={width} consoleHeight={height}>
			{children}
		</Card>
	);
}

Console.propTypes = { children: any };
