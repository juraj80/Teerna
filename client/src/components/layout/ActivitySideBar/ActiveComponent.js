import { oneOf } from "prop-types";
import { Chat, DocumentManager } from "../../activity";
import { ActivitySideBar } from './ActivitySideBar';

export default function ActiveComponent({ activityType }) {
	return (
		<ActivitySideBar>
			{activityType === 'chat' && <Chat />}
			{activityType === 'doc-manager' && <DocumentManager />}
			{activityType === 'player-list' && <div />}
		</ActivitySideBar>
	);
}

ActiveComponent.propTypes = {
    activityType: oneOf(['chat', 'doc-manager', 'player-list', 'requests']),
}