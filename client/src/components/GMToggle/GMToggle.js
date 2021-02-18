import { useState } from 'react';
import { Switch, Checkbox, Label } from './styles';
import { Tooltip } from '../Tooltip';

const GMToggle = ({ isGM, setIsGM }) => {
	const [showTooltip, setShowTooltip] = useState(false);

	return (
		<Switch
			onMouseEnter={() => setShowTooltip(true)}
			onMouseLeave={() => setShowTooltip(false)}
		>
			<Checkbox
				type='checkbox'
				name='playmode'
				checked={isGM}
				onChange={() => setIsGM(!isGM)}
			/>
			<Label htmlFor='playmode' lit={isGM}>
				<i className='bulb'>
					<span className='bulb-centre'></span>
					<span className='filament-1'></span>
					<span className='filament-2'></span>
					<span className='reflections'>
						<span></span>
					</span>
				</i>
			</Label>
			<Tooltip
				show={showTooltip}
				position='bottom'
				helperText={`switch to ${isGM ? 'player' : 'GM'} mode`}
			/>
		</Switch>
	);
};

export default GMToggle;
