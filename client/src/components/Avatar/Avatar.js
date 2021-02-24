import { bool, func, oneOf, string } from 'prop-types';
import { AvatarWrapper, Image } from './styles';
import { images } from '../../shared';

const Avatar = ({ style, status, source, action, clickable, ...props }) => {
	return (
		<AvatarWrapper
			status={status || null}
			onClick={action || null}
			clickable={clickable || false}
			{...props}
		>
			<Image src={source || images.avatar.blank} alt='avatar' />
		</AvatarWrapper>
	);
};

Avatar.propTypes = {
	status: oneOf(['error', 'success', 'info', 'warning']),
	source: string,
	action: func,
	clickable: bool,
};

export default Avatar;
