import { any, func } from 'prop-types';
import { MenuLink } from '../styles';

const LinkItem = ({ linkAction, children }) => (
	<MenuLink onClick={linkAction}>{children}</MenuLink>
);

LinkItem.propTypes = {
	linkAction: func,
	children: any,
};

export default LinkItem;
