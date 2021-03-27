import { node, func, string } from 'prop-types';
import { ContentArea, ModalArea, CloseButton } from './styles';

export const Modal = ({ children,  state, size, updateShow, ...props }) => (
	<ModalArea
		role='dialog'
		state={state}
		onClick={e => e.stopPropagation()}
		size={size || 'standard'}
		{...props}
	>
		<CloseButton onClick={() => updateShow(false)}>&times;</CloseButton>
		<ContentArea>{children}</ContentArea>
	</ModalArea>
);

Modal.propTypes = {
	children: node.isRequired,
	state: string.isRequired,
	size: string,
	updateShow: func.isRequired,
};
