import { useContext } from 'react';
import { Toggle, Input, Label } from './styles';
import { PlayerContext } from '../../contexts';

export default function PlayerToggle() {
	const { isGM, setIsGM } = useContext(PlayerContext);

	return (
		<Toggle>
			<Input
				type='checkbox'
				name='playermode'
				checked={isGM}
				onChange={() => setIsGM(!isGM)}
			/>
			<Label>
				<span>Player</span>
			</Label>
		</Toggle>
	);
}
