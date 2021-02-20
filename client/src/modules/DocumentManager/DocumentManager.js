import { useEffect, useState } from 'react';
import { Container, TabGroup, TabLink, Viewer } from './styles';
import { Screen } from './components';
import { Button } from '../../components';

const DocumentManager = () => {
	const [screen, setScreen] = useState('upload');
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

	return (
		<Container>
			<TabGroup>
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
						disabled={!canDownload}
						action={() => canDownload && setScreen('download')}
						text='Download Game'
					/>
				</TabLink>
				<TabLink>
					<Button
						style={{ minWidth: '200px' }}
						type='errors'
						disabled={!canDelete}
						action={() => canDelete && setScreen('delete')}
						text='Delete Game'
						colour={canDelete ? 'error' : undefined}
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
			</TabGroup>
			<Viewer>
				<Screen type={screen} setLoaded={setLoaded} setUploaded={setUploaded} />
			</Viewer>
		</Container>
	);
};

export default DocumentManager;
