import { func } from 'prop-types';
import { Icon } from '../Icon';
import { useConsoleSize } from '../../hooks';
import { Bar } from './styles';
import { transparentize } from 'polished';
import { colour } from '../../shared';

export default function Appbar({ handleDrawer }) {
	const { width } = useConsoleSize();
	return (
		<Bar consoleWidth={`${width}px`}>
			<Icon icon='menu' colour={transparentize(0.5, colour.white)} width='54px' height='38px' onClick={handleDrawer} />
		</Bar>
	);
}

Appbar.propTypes = {
	handleDrawer: func.isRequired,
};
