import { bool, func } from 'prop-types';
import { Button } from '../../../core';
import { Panel } from './styles';

export default function ButtonPanel({ deleteFile, downloadZip }) {
	return (
		<Panel>
			<Button type='button' action={downloadZip} status='info'>
				Download Zip
			</Button>
			<Button type='button' action={deleteFile} status='error'>
				Delete
			</Button>
		</Panel>
	);
}

ButtonPanel.propTypes = {
	deleteFile: func.isRequired,
	availableForDownload: bool.isRequired,
	downloadZip: func.isRequired,
	fileLoaded: bool.isRequired,
};
