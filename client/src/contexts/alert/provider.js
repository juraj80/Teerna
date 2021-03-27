import { useState } from 'react';
import { any } from 'prop-types';
import { v4 } from 'uuid';
import { AlertContext } from './context';
import { Container } from './styles';
import { Alert } from '../../components/feedback';

export const AlertProvider = ({ children }) => {
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
			<Container>
				{alerts.map(({ type, id, msg }) => (
					<Alert key={id} status={type} id={id} closeAlert={closeAlert}>
						{msg}
					</Alert>
				))}
			</Container>
			{children}
		</AlertContext.Provider>
	);
};

AlertProvider.propTypes = {
	children: any,
};
