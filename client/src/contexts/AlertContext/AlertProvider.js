import React, { useState } from 'react';
import uuid from 'uuidv4';
import { element, string, oneOfType } from 'prop-types';
import { AlertContainer } from './styles';
import { Alert } from '../../components';
import AlertContext from './AlertContext';

export default function AlertProvider({ children }) {
	const [alerts, updateAlerts] = useState([]);

	const closeAlert = id => {
		updateAlerts(prevAlerts => prevAlerts.filter(alert => alert.id !== id));
	};

	const addAlert = (type, msg) => {
		const id = uuid();
		updateAlerts([...alerts, { id, msg, type }]);
		setTimeout(() => {
			closeAlert(id);
		}, 5000);
	};

	return (
		<AlertContext.Provider value={addAlert}>
			<AlertContainer>
				{alerts.map(({ id, type, msg }) => (
					<Alert type={type} key={id} id={id} closeAlert={closeAlert}>
						{msg}
					</Alert>
				))}
			</AlertContainer>
			{children}
		</AlertContext.Provider>
	);
}

AlertProvider.propTypes = {
	children: oneOfType([element, string]).isRequired,
};
