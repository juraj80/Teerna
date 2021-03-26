import { useContext, useState } from 'react';
import { func } from 'prop-types';
import axios from 'axios';
import Dropzone from 'react-dropzone';
import { DragDrop, Form, FileLabel, SubmitInput, HelperText } from './styles';
import { AlertContext } from '../../../../contexts';
// import { ProgressBar } from '../../../../components/feedback';
import { spacing } from '../../../../styles';
import { Button } from '../../../core';

export default function CustomDropzone (){
	const addAlert = useContext(AlertContext);
	const [file, setFile] = useState(undefined);
	const [filename, setFilename] = useState(undefined);
	const [uploadedFile, setUploadedFile] = useState(undefined);
	const [message, setMessage] = useState(undefined);
	const [uploadPercentage, setUploadPercentage] = useState(0);

	const handleDrop = acceptedFiles => {
		setFile(acceptedFiles[0]);
		setFilename(acceptedFiles[0].name);
	};

	const fileSubmit = async (e) => {
		// e.preventDefault();
		const formData = new FormData();
		formData.append('file', file);

		try {
			const res = await axios({
				method: 'post',
				url: '/api/document/upload',
				data: formData,
				headers: {
					'Content-Type': 'multipart/form-data',
				},
				onUploadProgress:  progressEvent => {
					setUploadPercentage(parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total)));
					// clear percentage
					setTimeout(() => setUploadPercentage(0), 10000);
				},
			})
			const { fileName, filePath } = res.data;
			setUploadedFile({ fileName, filePath });
			setMessage('File Uploaded');
			addAlert('success', message);
		} catch (err) {
			const { status, data } = err.response;
			status === 500
				? setMessage('There was a problem with the server')
				: setMessage(data.msg);
			addAlert('error', message);
		}
	};

	// uploadedFile ? setUploaded(true) : setUploaded(false);

	return (
		<div style={{
				marginTop: spacing[16],
				display: 'flex',
				flexDirection: 'column',
				textAlign: 'center',
				width: '90%',
				maxHeight: '72.5%',
				minHeight: '70%'
			}}
		>
			<Form>
				<Dropzone onDrop={handleDrop}>
					{({ getRootProps, getInputProps, isDragActive }) => (
						<DragDrop {...getRootProps()}>
							<input {...getInputProps()} />
							<span>{isDragActive ? '📂' : '📁'}</span>
							<p>Drag'n'drop files, or click to select files</p>
						</DragDrop>
					)}
				</Dropzone>
				<FileLabel>{filename ? filename : 'No File Chosen'}</FileLabel>
					{/* <FileInput type='file' onChange={fileChange} /> */}
					{/* <ProgressBar percentage={uploadPercentage} /> */}
				 <HelperText>{message || ''}</HelperText>
				<Button
					style={{ width: '160px'}}
					type='button'
					disabled={!file}
					status='info'
					action={fileSubmit}
				>
					Upload
				</Button>
			</Form>
		</div>
	);
};

CustomDropzone.propTypes = {
    setUploaded: func.isRequired
}