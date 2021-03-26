import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { AlertContext, SessionContext } from '../../../contexts';
// import { Container } from '../styles';
import { ButtonPanel } from './ButtonPanel';
import { DocumentList } from './DocumentList';
import { Dropzone } from './Dropzone';
import { Previewer } from './Previewer';

export const DocumentManager = () => {
	const { isGM } = useContext(SessionContext);
	const addAlert = useContext(AlertContext);

    const [resStatus, setResStatus] = useState(undefined);
	const [uploaded, setUploaded] = useState(false);
	const [loaded, setLoaded] = useState(false);
	const [availableForDownload, setAvailableForDownload] = useState(false);


	useEffect(() => {
		if (loaded) setAvailableForDownload(true);
		else setAvailableForDownload(false);
	}, [loaded]);
	
	const deleteDoc = () => {
		axios({
			method: 'post',
			url: '/api/document/delete',
			data: {
			  token: localStorage.getItem('token'),
			}
		})
		.then(res => {
			setResStatus('success');
		}).catch(err => {
			addAlert('error', 'Could not delete game at this time.');
			setResStatus('error');
		});
	};

    const downloadZip = () => {
        axios({
			method: 'get',
			url: '/api/document/download',
			data: {
				token: localStorage.getItem('token'),
			}
		})
		.then(res => {
			setResStatus('success');
		})
		.catch(err => {
			addAlert('error', 'Could not download game at this time.');
			setResStatus('error');
		});
    };
    

	return (
		<>
			<Dropzone />
			{/* <Previewer setLoaded={setLoaded} uploaded={uploaded}/> */}
			<ButtonPanel deleteFile={deleteDoc} downloadZip={downloadZip}  />
			{/* <DocumentList /> */}
		</>
	);
};
