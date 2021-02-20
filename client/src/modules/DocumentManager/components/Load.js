import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Button } from '../../../components';

const Load = ({ setLoaded }) => {
	const [input, setInput] = useState('');
	const [markdown, setMarkdown] = useState(undefined);

	useEffect(() => {
		input &&
			fetch(input)
				.then(res => res.text())
				.then(text => setMarkdown(text));
	}, [input]);

	useEffect(() => {
		markdown ? setLoaded(true) : setLoaded(false);
	}, [markdown]);

	return (
		<>
			<ScreenTitle>{input ? input : 'Story'}</ScreenTitle>
			<Button action={() => setInput('game/assets/story/story.md')}>
				Load Game
			</Button>
			{markdown && (
				<NestedViewer>
					<ReactMarkdown source={markdown} />
				</NestedViewer>
			)}
		</>
	);
};

export default Load;
