import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { AlertContext } from '../../../contexts';
// import { Container } from '../styles';
import { ButtonPanel } from './ButtonPanel';
import { Dropzone } from './Dropzone';

export const DocumentManager = () => {
	const addAlert = useContext(AlertContext);

    const [resStatus, setResStatus] = useState(undefined);
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
			<ButtonPanel deleteFile={deleteDoc} downloadZip={downloadZip}  />
		</>
	);
};
