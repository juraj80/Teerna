import { useContext, useState } from 'react';
import axios from 'axios';
import { AlertContext } from '../../../contexts';
import { ProgressBar } from '../../../components';
import { DragDrop, Form, FileLabel, SubmitInput, HelperText } from '../styles';
import Dropzone from 'react-dropzone';
import { space } from '../../../shared';

const Upload = ({ setUploaded }) => {
	const addAlert = useContext(AlertContext);
	const [file, setFile] = useState('');
	const [filename, setFilename] = useState('');
	const [uploadedFile, setUploadedFile] = useState({});
	const [message, setMessage] = useState('');
	const [uploadPercentage, setUploadPercentage] = useState(0);

	const handleDrop = acceptedFiles => {
		setFile(acceptedFiles[0]);
		setFilename(acceptedFiles[0].name);
	};

	const fileSubmit = async e => {
		e.preventDefault();
		const formData = new FormData();
		formData.append('file', file);

		try {
			const res = await axios.post('/upload', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
				onUploadProgress: progressEvent => {
					setUploadPercentage(
						parseInt(
							Math.round((progressEvent.loaded * 100) / progressEvent.total)
						)
					);
					// clear percentage
					setTimeout(() => setUploadPercentage(0), 10000);
				},
			});
			const { fileName, filePath } = res.data;
			setUploadedFile({ fileName, filePath });
			setMessage('File Uploaded');
			setUploaded(true);
			addAlert('success', message);
		} catch (err) {
			const { status, data } = err.response;
			status === 500
				? setMessage('There was a problem with the server')
				: setMessage(data.msg);
			setUploaded(false);
			addAlert('error', message);
		}
	};

	return (
		<div
			style={{
				marginTop: space.medium[300],
				display: 'flex',
				flexDirection: 'column',
				textAlign: 'center',
				width: '90%',
			}}
		>
			<Form
				style={{
					width: '100%',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-around',
					alignItems: 'center',
					marginTop: space.medium[100],
					padding: `0 ${space.medium[200]}`,
				}}
			>
				<Dropzone onDrop={handleDrop}>
					{({ getRootProps, getInputProps, isDragActive }) => (
						<DragDrop {...getRootProps()}>
							<input {...getInputProps()} />
							<span>{isDragActive ? '📂' : '📁'}</span>
							<p>Drag'n'drop files, or click to select files</p>
						</DragDrop>
					)}
				</Dropzone>

				<div style={{ marginTop: space.medium[100] }}>
					<FileLabel>{filename ? filename : 'No File Chosen'}</FileLabel>
					{/* <FileInput type='file' onChange={fileChange} /> */}
					{/* <ProgressBar percentage={uploadPercentage} /> */}
				</div>
				{message && <HelperText>{message}</HelperText>}
				<SubmitInput
					type='submit'
					fill='fill'
					disabled={!file}
					action={fileSubmit}
					text='Upload'
				/>
			</Form>
		</div>
	);
};

export default Upload;
