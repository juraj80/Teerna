import { oneOf } from "prop-types";
import { DocumentManager } from "../../activity";
import { ActivitySideBar } from './ActivitySideBar';

export default function ActiveComponent({ activityType }) {
	return (
		<ActivitySideBar>
			{activityType === 'chat' && <div />}
			{activityType === 'doc-manager' && <DocumentManager />}
			{activityType === 'player-list' && <div />}
		</ActivitySideBar>
	);
}

ActiveComponent.propTypes = {
    activityType: oneOf(['chat', 'doc-manager', 'player-list', 'requests']),
}