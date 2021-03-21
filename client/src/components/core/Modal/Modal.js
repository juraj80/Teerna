import { node, func, string } from 'prop-types';
import { ContentArea, ModalArea, Title, CloseButton } from './styles';

export const Modal = ({ children, title, state, size, updateShow, ...props }) => (
	<ModalArea
		role='dialog'
		state={state}
		onClick={e => e.stopPropagation()}
		size={size || 'standard'}
		{...props}
	>
		<CloseButton onClick={() => updateShow(false)}>&times;</CloseButton>
		{title && <Title size={size}>{title}</Title>}
		<ContentArea>{children}</ContentArea>
	</ModalArea>
);

Modal.propTypes = {
	children: node.isRequired,
	title: string,
	state: string.isRequired,
	size: string,
	updateShow: func.isRequired,
};
