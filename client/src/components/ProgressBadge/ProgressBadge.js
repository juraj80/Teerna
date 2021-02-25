import { oneOf, string } from 'prop-types';
import { Container } from './styles';
import { Icon } from '../Icon';

export default function ProgressBadge({ status, ...props }) {
	return (
		<Container status={status} {...props}>
			<Icon icon={status} />
			{status.toUpperCase()}
		</Container>
	);
}

ProgressBadge.propTypes = {
	status: oneOf(['success', 'error', 'loading', 'disabled', 'info']).isRequired,
	icon: string.isRequired,
};
