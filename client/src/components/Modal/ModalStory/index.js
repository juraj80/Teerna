import { useContext } from 'react';
import { string } from 'prop-types';
import { ModalContext } from '../../../contexts';
import Modal from '../Modal';

export default function ModalStory({ size }) {
	const { updateShow, updateContent } = useContext(ModalContext);

	return (
		<div>
			<button
				type='button'
				onClick={() => {
					updateShow(true);
					updateContent(() => ({ state }) => (
						<Modal
							title={`${size.toUpperCase()} Modal`}
							state={state}
							size={size}
						>
							<div style={{ padding: '24px' }}>Lorem</div>
						</Modal>
					));
				}}
			>
				Click to Open
			</button>
		</div>
	);
}

ModalStory.propTypes = {
	size: string.isRequired,
};
