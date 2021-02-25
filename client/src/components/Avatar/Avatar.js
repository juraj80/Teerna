import { func, oneOf, string } from 'prop-types';
import { images } from '../../shared';

export default function Avatar({ action, source, altText, ...props }) {
	<Image
		onClick={action}
		src={source || images.avatar.blank}
		alt={altText || 'Profile Image'}
		{...props}
	/>;
}

Avatar.propTypes = {
	action: func,
	source: string,
	altText: string,
	status: oneOf('error', 'info', 'success', 'disabled'),
	size: oneOf(['big', 'small']),
};
