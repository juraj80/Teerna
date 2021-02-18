import { func, string } from 'prop-types';
import { Item } from '../styles';

const ActionItem = ({ action, children }) => {
	return <Item onClick={action}>{children}</Item>;
};

ActionItem.propTypes = {
	action: func.isRequired,
	children: string.isRequired,
};

export default ActionItem;
