import React, { useContext } from 'react';
import { AlertContext } from '../../../contexts';

export default function () {
	const addAlert = useContext(AlertContext);
	return (
		<div>
			<button
				onClick={() => addAlert('notification', 'NotificationMessage')}
				type='button'
			>
				Notification Type
			</button>
			<button
				onClick={() => addAlert('success', 'SuccessMessage')}
				type='button'
			>
				Success Type
			</button>
			<button onClick={() => addAlert('error', 'ErrorMessage')} type='button'>
				Error Type
			</button>
			<button
				onClick={() => addAlert('warning', 'WarningMessage')}
				type='button'
			>
				Warning Type
			</button>
			<button
				onClick={() => addAlert('info', 'InformationMessage')}
				type='button'
			>
				Info Type
			</button>
		</div>
	);
}
