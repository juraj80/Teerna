import { oneOf, string } from 'prop-types';
import { icons } from '../../../assets';
import { statuses, iconNames } from '../../../consts';

export default function Icon({ icon, size,  status, ...props }) {
	const { viewBox, d } = icons[icon];
	const width = size && size === 'large' ? '40px' : '24px';
	const height = size && size === 'large' ? '40px' : '24px';

	return (
		<svg
			viewBox={viewBox}
            role={status && 'img'}
            aria-labelledby={status && `status-alert-${status}`}
            aria-hidden={!status}
			width={width}
			height={height}
			xlmns='http://www.w3.org/2000'
			{...props}
		>
            {status && <title id={`status-alert-${status}`}>{status}</title>}
			<path fill='currentColor' d={d} />
		</svg>
	);
}

Icon.propTypes = {
    icon: oneOf(iconNames).isRequired,
    size: string,
    status: oneOf([...statuses,'action'])
}
