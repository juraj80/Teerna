import React, { useContext } from 'react';
import { ModalContext } from '../contexts';
import { Modal } from '../components';

export default {
	title: 'Modal',
	component: Modal,
};

export const standard = () => {
	const { updateShow, updateLocked, updateContent } = useContext(ModalContext);
	return (
		<button
			onClick={() => {
				updateShow(false);
				updateContent(() => ({ state }) => (
					<Modal
						state={state}
						updateShow={updateShow}
						style={{ padding: '20px 16px' }}
					>
						<div>MODAL CONTENT</div>
					</Modal>
				));
				updateLocked(false);
				updateShow(true);
			}}
			type='button'
		>
			Notification Type
		</button>
	);
};
