import DropZone from 'react-dropzone';
import { func, string } from 'prop-types';
import { Form, Zone, InfoBox, Label } from './styles';
import { Button } from '..';
export default function DragDropZone({ filename, setFile, setReady }) {

	const handleDrop = acceptedFiles => setFile(acceptedFiles[0]);

	return (
		<Form>
			<DropZone onDrop={handleDrop}>
				{({ getRootProps, getInputProps, isDragActive }) => (
					<Zone {...getRootProps()}>
						<input {...getInputProps()} />
						<span>{isDragActive ? '📂' : '📁'}</span>
						<p>Drag'n'drop file, or click to select file</p>
					</Zone>
				)}
			</DropZone>
			<InfoBox>
				<Label>{filename || 'No File Chosen'}</Label>
				<Button
					type='submit'
					disabled={!filename}
					action={() => filename && setReady(true)}
					text='Upload'
				/>
			</InfoBox>
		</Form>
	);
}

DragDropZone.propTypes = {
	filename: string,
	setFile: func.isRequired,
	setReady: func.isRequired,
};
