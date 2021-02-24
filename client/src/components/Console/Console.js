import { any } from 'prop-types';
import { useConsoleSize } from '../../hooks';
import { AppWrapper } from './styles';

const Console = ({ children }) => {
	const consoleSize = useConsoleSize();

	return (
		<AppWrapper
			consoleWidth={consoleSize.width}
			consoleHeight={consoleSize.height}
		>
			{children}
		</AppWrapper>
	);
};

Console.propTypes = {
	children: any,
};

export default Console;
