import { func, oneOf, string } from 'prop-types';
import { Image, Circle } from './styles';
import { statuses } from '../../../consts';
import { AvatarBlue, AvatarGreen, AvatarGrey, AvatarOrange, AvatarPurple, AvatarRed, AvatarYellow } from '../../../assets/mediaAssets/avatars';

export default function Avatar({
	action,
	source,
	altText,
	status,
	accent,
	...props
}) {
	const getSrc = () => {
		const rand = Math.round(Math.random() * 6);
		let rsrc;
		switch (rand) {
			case 0: rsrc = <AvatarGreen/>; break;
			case 1: rsrc = <AvatarGrey/>; break;
			case 2: rsrc = <AvatarOrange/>; break;
			case 3: rsrc = <AvatarYellow/>; break;
			case 4: rsrc = <AvatarPurple/>; break;
			case 5: rsrc = <AvatarRed/>; break;
			case 6: 
			default: rsrc = <AvatarBlue/>; break;
		}
		return rsrc;
	}

	return source ? (
		<Image
			accent={accent}
			status={status}
			onClick={action}
			src={source || getSrc()}
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
			{getSrc()}
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
