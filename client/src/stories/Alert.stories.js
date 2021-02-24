import React, { useContext } from 'react';
import { Alert } from '../components';
import { AlertContext } from '../contexts';

export default {
	title: 'Alerts',
	component: Alert,
};

export const all = () => {
	const addAlert = useContext(AlertContext);
	return (
		<div>
			<button
				onClick={() => addAlert('notification', 'Notification Message')}
				type='button'
			>
				Notification Type
			</button>
			<button
				onClick={() => addAlert('success', 'Success Message')}
				type='button'
			>
				Success Type
			</button>
			<button onClick={() => addAlert('error', 'Error Message')} type='button'>
				Error Type
			</button>
			<button
				onClick={() => addAlert('warning', 'Warning Message')}
				type='button'
			>
				Warning Type
			</button>
			<button
				onClick={() => addAlert('info', 'Information Message')}
				type='button'
			>
				Info Type
			</button>
		</div>
	);
};
