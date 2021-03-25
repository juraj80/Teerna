import { oneOf } from "prop-types";
import { useConsoleSize } from "../../../hooks";
import { GameView, MapView } from "../../views";
import { Container } from './styles';

export default function ActiveComponent({ viewType, drawerPos }) {
    const { width } = useConsoleSize();
    const offset = drawerPos === 0 ? 0 : drawerPos === 1 ? 70 : width * 1 / 5;
	return (
		<Container offset={`${offset}px`}>
			{viewType === 'story-view' && <GameView />}
            {viewType === 'map-view' && <MapView />}
		</Container>
	);
}

ActiveComponent.propTypes = {
    activityType: oneOf(['story-view', 'map-view']),
}