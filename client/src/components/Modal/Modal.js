import { any, func, string } from 'prop-types';
import { ContentArea, ModalArea, ModalHeading, CloseButton } from './styles';

const Modal = ({ children, title, state, size, updateShow, ...props }) => (
	<ModalArea
		state={state}
		onClick={e => e.stopPropagation()}
		size={size || 'standard'}
		{...props}
	>
		<CloseButton onClick={() => updateShow(false)} />
		{title && <ModalHeading size={size}>{title}</ModalHeading>}
		<ContentArea>{children}</ContentArea>
	</ModalArea>
);

Modal.propTypes = {
	children: any.isRequired,
	title: string,
	state: string.isRequired,
	size: string,
	updateShow: func.isRequired,
};

export default Modal;
