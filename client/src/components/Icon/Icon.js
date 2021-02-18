import { string } from 'prop-types';
import { icons } from '../../shared';

const Icon = ({ icon, width, height, colour, ...props }) => {
	const { viewBox, d } = icons[icon];
	return (
		<svg
			viewBox={viewBox}
			width={width || '22px'}
			height={height || '22px'}
			xlmns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path fill={colour || 'currentColor'} d={d} />
		</svg>
	);
};

Icon.propTypes = {
	icon: string.isRequired,
	width: string,
	height: string,
	colour: string,
};

export default Icon;
