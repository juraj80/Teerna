import { lazy, useContext } from 'react';
import { any, string } from 'prop-types';
import { Redirect } from 'react-router-dom';
import { AlertContext, AuthContext, PlayerContext } from '../../contexts';

const GMDashboard = lazy(() => import('../../pages/GMDashboard'));
const PlayerDashboard = lazy(() => import('../../pages/PlayerDashboard'));

export default function ActiveDashboard({ match, userId }) {
	const addAlert = useContext(AlertContext);
	const { user } = useContext(AuthContext);
	const { isGM } = useContext(PlayerContext);

	if (!user.loggedIn) {
		addAlert('warning', 'incorrect user credentials');
		return <Redirect to='/' />;
	}

	if (isGM) return <GMDashboard />;
	return <PlayerDashboard />;
}

ActiveDashboard.propTypes = {
	match: any.isRequired,
	userId: string.isRequired,
};
