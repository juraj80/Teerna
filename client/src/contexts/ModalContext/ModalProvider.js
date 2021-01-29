import { useEffect, useState } from 'react';
import { element, oneOfType, string } from 'prop-types';
import { Transition } from 'react-transition-group';
import { DarkBackground } from './styles';
import ModalContext from './ModalContext';

export default function ModalProvider({ children }) {
	const [show, updateShow] = useState(false);
	const [Content, updateContent] = useState(false);
	const [locked, updateLocked] = useState(false);

	useEffect(() => {
		show && updateShow(false);
	}, [show]);

	return (
		<ModalContext.Provider value={{ updateShow, updateContent, updateLocked }}>
			{children}
			<Transition in={show} timeout={{ enter: 1, exit: 500 }} unmountOnExit>
				{state => (
					<DarkBackground
						state={state}
						onClick={() => !locked && updateShow(false)}
					>
						<div onClick={e => e.stopPropagation()}>
							{Content && <Content state={state} />}
						</div>
					</DarkBackground>
				)}
			</Transition>
		</ModalContext.Provider>
	);
}

ModalProvider.propTypes = {
	children: oneOfType([element, string]).isRequired,
};
