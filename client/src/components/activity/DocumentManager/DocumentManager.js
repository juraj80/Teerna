import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { AlertContext, SessionContext } from '../../../contexts';
// import { Container } from '../styles';
import { ButtonPanel } from './ButtonPanel';
import { Dropzone } from './Dropzone';
import querystring from 'querystring';

export const DocumentManager = () => {
	const addAlert = useContext(AlertContext);

    const [resStatus, setResStatus] = useState(undefined);
	const [loaded, setLoaded] = useState(false);
  const {guid} = useContext(SessionContext);
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
			  guid
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
			window.open(`/api/document/download?${querystring.stringify({token: localStorage.getItem('token'), guid})}`);
		};

	return (
		<>
			<Dropzone />
			<ButtonPanel deleteFile={deleteDoc} downloadZip={downloadZip}  />
		</>
	);
};
