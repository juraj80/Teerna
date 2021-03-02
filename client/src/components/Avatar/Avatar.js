import { func, oneOf, string } from 'prop-types';
import { images } from '../../shared';
import { Image } from './styles';

export default function Avatar({ action, source, altText, ...props }) {
	return (
		<Image
			onClick={action}
			src={source || images.avatar.blank}
			alt={altText || 'Profile Image'}
			{...props}
		/>
	);
}

Avatar.propTypes = {
	action: func,
	source: string,
	altText: string,
	status: oneOf(['error', 'info', 'success', 'disabled']),
	size: oneOf(['big', 'small']),
};
