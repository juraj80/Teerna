import React, { useContext } from 'react';
import { Alert } from '../components/feedback';
import { AlertContext, AlertProvider } from '../contexts';
import { withContexts } from '@storybook/addon-contexts/react';

const decorators = [
    (Story) => (
      <AlertProvider>
        <Story />
      </AlertProvider>
    ),
  ];

export default {
	title: 'Alerts',
	component: Alert,
    decorators
};

export const StatusAlerts = () => {
	const addAlert = useContext(AlertContext);
	return (
		<div>
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
