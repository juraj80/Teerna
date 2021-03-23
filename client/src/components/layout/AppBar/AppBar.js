import { func } from 'prop-types';
import { useConsoleSize } from '../../../hooks';
import { Icon } from '../../core';
import { Bar } from './styles';

export default function AppBar({ handleDrawer }) {
	const { width } = useConsoleSize();
	return (
		<Bar consoleWidth={`${width}px`}>
			<Icon
				icon='menu'
				width='54px'
				height='38px'
				onClick={handleDrawer}
			/>
		</Bar>
	);
}

AppBar.propTypes = {
	handleDrawer: func.isRequired,
};
