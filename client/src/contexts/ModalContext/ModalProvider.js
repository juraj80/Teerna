import { useState } from 'react';
import { any } from 'prop-types';
import { Transition } from 'react-transition-group';
import { ModalBackground } from './styles';
import { ModalContext } from './ModalContext';

const ModalProvider = ({ children }) => {
	const [show, updateShow] = useState(false);
	const [Content, updateContent] = useState(null);
	const [locked, updateLocked] = useState(false);

	return (
		<ModalContext.Provider value={{ updateShow, updateContent, updateLocked }}>
			{children}
			<Transition in={show} timeout={{ enter: 1, exit: 400 }} unmountOnExit>
				{state => (
					<ModalBackground
						state={state}
						onClick={() => !locked && updateShow(false)}
					>
						<div onClick={e => e.stopPropagation()}>
							{Content && <Content state={state} />}
						</div>
					</ModalBackground>
				)}
			</Transition>
		</ModalContext.Provider>
	);
};

ModalProvider.propTypes = {
	children: any.isRequired,
};

export { ModalProvider };
