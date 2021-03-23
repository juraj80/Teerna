import { bool, func } from 'prop-types';
import { Button } from '../../../core';
import { Panel } from './styles';

export default function ButtonPanel({ deleteFile, availableForDownload, downloadZip}) {
	return (
		<Panel>
			<Button
				type='button'
				action={deleteFile}
				status='error'
				disabled={!availableForDownload}
			>
				Delete
			</Button>
			<Button
				type='button'
				action={downloadZip}
				status='info'
				disabled={!availableForDownload}
			>
				Download Zip
			</Button>
		</Panel>
	);
}

ButtonPanel.propTypes = {
	deleteFile: func.isRequired,
	availableForDownload: bool.isRequired,
	downloadZip: func.isRequired,
};
