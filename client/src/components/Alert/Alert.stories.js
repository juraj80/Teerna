import React from 'react';
import { AlertProvider } from '../../contexts';
import AlertStory from './AlertStory';

export default {
	title: 'Alerts',
	parameters: {
		component: AlertStory,
		componentSubtitle: 'Alert Story',
	},
};

export const standard = () => (
	<AlertProvider>
		<AlertStory />
	</AlertProvider>
);
