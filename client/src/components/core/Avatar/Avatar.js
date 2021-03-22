import { func, oneOf, string } from 'prop-types';
import { Image, Circle } from './styles';
import { images } from '../../../assets';
import { statuses } from '../../../consts';
import { AvatarBlue } from '../../../assets/mediaAssets/avatars';

export default function Avatar({
	action,
	source,
	altText,
	status,
	accent,
	...props
}) {
	return source ? (
		<Image
			accent={accent}
			status={status}
			onClick={action}
			src={source || images.avatars.purple}
			alt={altText || 'Profile Image'}
			{...props}
		/>
	) : (
		<Circle
			accent={accent}
			status={status}
			onClick={action}
			alt={altText || 'Profile Image'}
			{...props}
		>
			<AvatarBlue/>
		</Circle>
	);
}

Avatar.propTypes = {
	action: func,
	source: string,
	altText: string,
	status: oneOf(statuses),
	size: oneOf(['big', 'small']),
};
