import { useContext, useEffect, useState } from 'react';
import { func } from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { Button, Modal } from '../../../core';
import { NestedViewer } from './styles';
import { spacing } from '../../../../styles';
import { ModalContext } from '../../../../contexts';

export const Previewer = ({ setLoaded, uploaded }) => {
	const [input, setInput] = useState('');
	const [markdown, setMarkdown] = useState(undefined);
	const { updateContent, updateLocked, updateShow } = useContext(ModalContext);
	const [disabled, setDisabled] = useState(true);

	useEffect(() => {
		uploaded && setDisabled(false);
	},[uploaded])

	useEffect(() => {
		input &&
			fetch(input)
				.then(res => res.text())
				.then(text => setMarkdown(text));
	}, [input]);

    useEffect(() => {
		if (markdown) {
			setLoaded(true);
			updateShow(false);
			updateLocked(true);
			updateContent(() => ({state}) => (
				<Modal size='large' state={state} updateShow={updateShow}>
					<NestedViewer>
						<ReactMarkdown source={markdown} />
					</NestedViewer>
				</Modal>
			));
			updateLocked(false);
			updateShow(true);
		}
		setLoaded(false);
	}, [markdown]);

	return (
		<div style={{display: 'flex', justifyContent: 'center'}}>
			<Button
				type='button'
				status='info'
				// disabled={disabled}
				action={() => setInput('/game/assets/story/story.md')}
                style={{ margin: spacing[8], minWidth: '160px'}}
			>
				Load Preview
			</Button>
		</div>
	);
};

Previewer.propTypes = {
    setLoaded: func.isRequired,
}