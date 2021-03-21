import { useState } from 'react';
import { node } from 'prop-types';
import { Transition } from 'react-transition-group';
import { Backdrop } from './styles';
import { ModalContext } from './context';

export const ModalProvider = ({ children }) => {
	const [show, updateShow] = useState(false);
	const [Content, updateContent] = useState(undefined);
	const [locked, updateLocked] = useState(false);

	return (
		<ModalContext.Provider value={{ updateShow, updateContent, updateLocked }}>
			{children}
			<Transition in={show} timeout={{ enter: 1, exit: 400 }} unmountOnExit>
				{state => (
					<Backdrop data-testid='backdrop' state={state} onClick={() => !locked && updateShow(false)}>
						<div onClick={e => e.stopPropagation()}>
							{Content && <Content state={state} />}
						</div>
					</Backdrop>
				)}
			</Transition>
		</ModalContext.Provider>
	);
}

ModalProvider.propTypes = {
	children: node.isRequired,
};
