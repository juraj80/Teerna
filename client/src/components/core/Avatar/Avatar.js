import { func, oneOf, string } from 'prop-types';
import { Image, Circle } from './styles';
import { images } from '../../../assets';
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
		const rand = Math.random() * 6;
		switch (rand) {
			case 0: return AvatarGreen; break;
			case 1: return AvatarGrey; break;
			case 2: return AvatarOrange; break;
			case 3: return AvatarYellow; break;
			case 4: return AvatarPurple; break;
			case 5: return AvatarRed; break;
			case 6: 
			default: return AvatarBlue;
		}
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
