import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import { Container, FileBlock, FileList, StoryView, Dropzone } from './styles';
import { AlertContext, SessionContext } from '../../../contexts';

export default function GameView() {
	const addAlert = useContext(AlertContext);
	const [files, setFiles] = useState([]);
	const [story, setStory] = useState(undefined);
	const [markdown, setMarkdown] = useState(undefined);
	const [displayMD, setDisplayMD] = useState(false);
	const {guid} = useContext(SessionContext);

	useEffect(() => {
		axios({
			method: 'get',
			url: '/api/document/get-files',
			params: {
				token: localStorage.getItem('token'),
				guid
			},
		})
		.then(res => setFiles(res.data))
		.catch(err => addAlert('error', 'Could not retrieve files right now.'));
	}, []);

	useEffect(() => {
		story &&
		axios({
			method: 'get',
			url: '/api/document/content',
			params: {
				token: localStorage.getItem('token'),
				guid,
				file: story
			},
		})
				.then(res => {console.log(res.data); return res.data})
				.then(text => setMarkdown(text));
	}, [story]);

	useEffect(() => {
		return () => setStory(undefined);
	}, [markdown]);

	const handleSelect = () => {
		// on drop: load file
		if (story)	setDisplayMD(true);
	};

	return (
		<Container>
			<FileList>
				{ (files && files.map) ? files.map((file, idx) => {
							return (
								<FileBlock
									idx={idx}
									onClick={() => {
										setStory(file.key);
										handleSelect();
									}}
								>
									<p>
										Story {idx + 1}
									</p>
								</FileBlock>
							);
					  })
					: []}
			</FileList>
			{displayMD ? (
				<StoryView>
					<ReactMarkdown source={markdown} />
				</StoryView>
			) : (
				<StoryView>
					<Dropzone />
				</StoryView>
			)}
		</Container>
	);
}
