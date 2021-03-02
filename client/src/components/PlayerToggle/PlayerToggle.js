import { useContext } from 'react';
import { Toggle, Input, Label } from './styles';
import {  SessionContext } from '../../contexts';

export default function PlayerToggle() {
	const { isGM } = useContext(SessionContext);

	return (
		<Toggle>
			<Input
				type='checkbox'
				name='playermode'
				checked={isGM}
				disabled={true}
			/>
			<Label>
				<span>Player</span>
			</Label>
		</Toggle>
	);
}
