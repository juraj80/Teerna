import axios from 'axios';
import { useState, useContext } from 'react';
import { AlertContext } from '../../../contexts';
import { Form, SubmitInput } from '../styles';

const Delete = () => {
	const addAlert = useContext(AlertContext);
	const [resSuccess, setResSuccess] = useState(undefined);

	const submitInput = () => {
		axios
			.post('http://localhost:5000/delete')
			.then(res => {
				setResSuccess('success');
			})
			.catch(err => {
				addAlert('error', 'Could not delete game at this time.');
				setResSuccess('error');
			});
	};
	return (
		<Form>
			<SubmitInput
				type='button'
				text='Delete Game'
				fill='fill'
				action={() => submitInput()}
				status={resSuccess}
			/>
		</Form>
	);
};
export default Delete;
