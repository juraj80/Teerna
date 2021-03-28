import { oneOf } from "prop-types";
import { Chat, DocumentManager, PlayerList } from "../../activity";
import { ActivitySideBar } from './ActivitySideBar';

export default function ActiveComponent({ activityType }) {
	return (
		<ActivitySideBar>
			{activityType === 'chat' && <Chat />}
			{activityType === 'doc-manager' && <DocumentManager />}
			{activityType === 'player-list' && <PlayerList />}
		</ActivitySideBar>
	);
}

ActiveComponent.propTypes = {
    activityType: oneOf(['chat', 'doc-manager', 'player-list', 'requests']),
}