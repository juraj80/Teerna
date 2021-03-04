import { useContext, useEffect, useState } from 'react';
import { Container, TabGroup, TabLink, Viewer } from './styles';
import { Screen } from './components';
import { Button } from '../../components';
import { PlayerContext } from '../../contexts';

const DocumentManager = () => {
	const { isGM } = useContext(PlayerContext);
	const [screen, setScreen] = useState('documents');
	const [uploaded, setUploaded] = useState(false);
	const [loaded, setLoaded] = useState(false);
	const [canDelete, setCanDelete] = useState(false);
	const [canLoad, setCanLoad] = useState(false);
	const [canDownload, setCanDownload] = useState(false);

	useEffect(() => {
		if (loaded) {
			setCanDelete(true);
			setCanDownload(true);
		} else {
			setCanDelete(false);
			setCanDownload(false);
		}
	}, [loaded]);

	useEffect(() => {
		uploaded ? setCanLoad(true) : setCanLoad(false);
	}, [uploaded]);

	const GMOnly = (
		<>
			<TabLink>
				<Button
					style={{ minWidth: '200px' }}
					fill='fill'
					action={() => setScreen('upload')}
					type='button'
					text='Upload Game'
					colour='black'
				/>
			</TabLink>
			<TabLink>
				<Button
					style={{ minWidth: '200px' }}
					type='button'
					status='info'
					disabled={!canDownload}
					action={() => canDownload && setScreen('download')}
					text='Download Game'
				/>
			</TabLink>
			<TabLink>
				<Button
					style={{ minWidth: '200px' }}
					type='button'
					status='error'
					disabled={!canDelete}
					action={() => canDelete && setScreen('delete')}
					text='Delete Game'
				/>
			</TabLink>
			<TabLink>
				<Button
					style={{ minWidth: '200px' }}
					type='button'
					disabled={!canLoad}
					action={() => canLoad && setScreen('load')}
					text='Load Game'
				/>
			</TabLink>
		</>
	);

	return (
		<Container>
			<TabGroup>
				{isGM && GMOnly}
				<TabLink>
					<Button
						style={{ minWidth: '200px' }}
						fill='fill'
						disabled={false}
						action={() => setScreen('documents')}
						type='button'
						text='View Documents'
						colour='black'
					/>
				</TabLink>
			</TabGroup>
			<Viewer>
				<div style={{ paddingTop: '20px' }}>
					<Screen
						type={screen}
						setLoaded={setLoaded}
						setUploaded={setUploaded}
					/>
				</div>
			</Viewer>
		</Container>
	);
};

export default DocumentManager;
