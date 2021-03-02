import { func } from 'prop-types';
import { Checkbox, Label, Switch } from './styles';
import { useDarkMode } from '../../hooks';
import { useEffect, useState } from 'react';

export default function ThemeToggle({ toggleTheme }) {
	const { theme } = useDarkMode();
	const [lit, setLit] = useState(true);

	return (
		<Switch>
			<Checkbox
				type='checkbox'
				name='thememode'
				checked={lit}
				onChange={() => {
					setLit(!lit);
					toggleTheme();
				}}
			/>
			<Label htmlFor='thememode' lit={lit}>
				<i className='bulb'>
					<span className='bulb-centre'></span>
					<span className='filament-1'></span>
					<span className='filament-2'></span>
					<span className='reflections'>
						<span></span>
					</span>
				</i>
			</Label>
		</Switch>
	);
}

ThemeToggle.propTypes = {
	toggleTheme: func.isRequired,
};
