import { ModalProvider } from '../../contexts';
import ModalStory from './ModalStory';
import Modal from './Modal';

export default {
	title: 'Modal',
	parameters: {
		component: Modal,
		componentSubtitle: 'Modal Story',
	},
};

export const small = () => (
	<ModalProvider>
		<ModalStory size='small' />
	</ModalProvider>
);

export const standard = () => (
	<ModalProvider>
		<ModalStory size='standard' />
	</ModalProvider>
);

export const large = () => (
	<ModalProvider>
		<ModalStory size='large' />
	</ModalProvider>
);
