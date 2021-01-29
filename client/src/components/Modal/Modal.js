import { array, element, oneOfType, string, func } from 'prop-types';
import { ModalArea, Heading, ContentArea } from './styles';

export default function Modal({ children, title, state, size, updateShow }) {
	return (
		<ModalArea onClick={() => updateShow(false)} state={state} size={size}>
			{title && <Heading size={size}>{title}</Heading>}
			<ContentArea>{children}</ContentArea>
		</ModalArea>
	);
}

Modal.propTypes = {
	children: oneOfType([element, array]).isRequired,
	title: string,
	state: string.isRequired,
	size: string,
	updateShow: func.isRequired,
};

Modal.defaultProps = { size: 'standard' };
