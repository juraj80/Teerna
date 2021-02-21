import axios from 'axios';
import { useContext, useState } from 'react';
import { AlertContext } from '../../../contexts';
import { Form, SubmitInput } from '../styles';

const Download = () => {
	const addAlert = useContext(AlertContext);
	const [resSuccess, setResSuccess] = useState(undefined);

	const submitInput = () => {
		axios
			.get('http://localhost:5000/download')
			.then(res => {
				setResSuccess('success');
			})
			.catch(err => {
				addAlert('error', 'Could not download game at this time.');
				setResSuccess('error');
			});
	};

	return (
		<Form>
			<SubmitInput
				type='button'
				text='Download Game'
				action={() => submitInput()}
				fill='fill'
				status={resSuccess || 'info'}
			/>
		</Form>
	);
};
export default Download;
