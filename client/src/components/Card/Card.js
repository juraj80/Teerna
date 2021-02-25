import { any, oneOf, string } from 'prop-types';
import { Container } from './styles';

export default function Card({ 
    status, width, height, type, children, ...props
}) {
	return (
		<Container
			status={status}
			width={width}
			height={height}
			type={type}
			{...props}
		>
			{children}
		</Container>
	);
}

Card.propTypes = {
	status: oneOf(['error', 'success', 'info', 'warning']),
	width: string.isRequired,
	height: string.isRequired,
	type: string.isRequired,
	children: any.isRequired,
};
