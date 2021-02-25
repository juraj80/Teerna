import { bool, func, oneOf, string } from 'prop-types';
import { Icon } from '../Icon';
import { Circle } from './styles';

export default function IconButton({
	withAlert, icon, status, colour, action, ...props
}) {
	return (
		<Circle 
            onClick={action}
            withAlert={withAlert} 
            status={status} 
            colour={colour} 
            {...props}
        >
	    	<Icon icon={icon} />
		</Circle>
	);
}

IconButton.propTypes = {
    action: func,
	withAlert: bool,
	icon: string.isRequired,
	status: oneOf(['error', 'success', 'info', 'warning']),
	colour: string,
};
