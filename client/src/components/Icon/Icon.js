import { string } from 'prop-types';
import { icons } from '../../shared';

export default function Icon({ icon, width, height, colour, ...props }) {
	const { viewBox, d } = icons[icon];
	return (
		<svg
			viewBox={viewBox}
			width={width || '24px'}
			height={height || '24px'}
			xlmns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path fill={colour || 'currentColor'} d={d} />
		</svg>
	);
}

Icon.propTypes = {
	icon: string.isRequired,
	width: string,
	height: string,
	colour: string,
};
