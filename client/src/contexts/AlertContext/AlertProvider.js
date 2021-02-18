import { useState } from 'react';
import { any } from 'prop-types';
import { v4 } from 'uuid';
import { AlertContext } from './AlertContext';
import { AlertsContainer } from './styles';
import { Alert } from '../../components';

const AlertProvider = ({ children }) => {
	const [alerts, updateAlerts] = useState([]);

	const closeAlert = id => {
		updateAlerts(prev => prev.filter(alert => alert.id !== id));
	};

	const addAlert = (type, msg) => {
		const id = v4();
		updateAlerts([...alerts, { id, msg, type }]);
		setTimeout(() => {
			closeAlert(id);
		}, 4000);
	};

	return (
		<AlertContext.Provider value={addAlert}>
			<AlertsContainer>
				{alerts.map(({ type, id, msg }) => (
					<Alert key={id} type={type} id={id} closeAlert={closeAlert}>
						{msg}
					</Alert>
				))}
			</AlertsContainer>
			{children}
		</AlertContext.Provider>
	);
};

AlertProvider.propTypes = {
	children: any,
};

export { AlertProvider };
