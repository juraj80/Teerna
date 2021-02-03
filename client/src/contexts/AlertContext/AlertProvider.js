import React, { useState } from 'react';
import { v4 } from 'uuid';
import { element, string, oneOfType } from 'prop-types';
import { AlertContainer } from './styles';
import { Alert } from '../../components';
import AlertContext from './AlertContext';

export default function AlertProvider({ children }) {
	const [alerts, updateAlerts] = useState([]);

	const closeAlert = id => {
		updateAlerts(prevAlerts => prevAlerts.filter(alert => alert.id !== id));
	};

	const addAlert = ({ type, msg }) => {
		const id = v4();
		updateAlerts([...alerts, { id, type, msg }]);
		setTimeout(() => {
			closeAlert(id);
		}, 5000);
	};

	return (
		<AlertContext.Provider value={addAlert}>
			<AlertContainer>
				{alerts.map(({ id, type, msg }) => (
					<Alert key={id} id={id} type={type} closeAlert={() => closeAlert(id)}>
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
