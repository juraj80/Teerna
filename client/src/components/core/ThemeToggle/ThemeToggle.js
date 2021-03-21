import { func } from 'prop-types';
import { Checkbox, Label, Switch } from './styles';
import { useDarkMode } from '../../../hooks';
import { useEffect, useState } from 'react';

export default function ThemeToggle({ toggleTheme }) {
	const { theme } = useDarkMode();
	const [lit, setLit] = useState(true);

	useEffect(() => setLit(theme === 'light'), [toggleTheme]);

	return (
		<Switch>
			<Checkbox
				role='switch'
				aria-label='theme-checkbox'
				type='checkbox'
				name='theme-checkbox'
				checked={lit}
				onChange={() => {
					setLit(!lit);
					toggleTheme();
				}}
			/>
			<Label
				aria-label='theme-label'
				htmlFor='theme-checkbox'
				lit={lit}
			>
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
