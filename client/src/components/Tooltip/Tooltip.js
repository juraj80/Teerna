import { bool, oneOf, string } from 'prop-types';
import { Box } from './styles';

const Tooltip = ({ show, position, helperText, ...props }) => {
	return (
		<Box show={show} position={position} helperText={helperText} {...props} />
	);
};

Tooltip.propTypes = {
	show: bool.isRequired,
	position: oneOf(['top', 'right', 'bottom', 'left']),
	helperText: string.isRequired,
};

export default Tooltip;
