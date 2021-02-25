import { func } from 'prop-types';
import { Checkbox, Label, Switch } from './styles';
import { useDarkMode } from '../../hooks';

export default function ThemeToggle({ toggleTheme }) {
	const { theme } = useDarkMode();
	return (
		<Switch>
			<Checkbox
				type='checkbox'
				name='thememode'
				checked={theme === 'light'}
				onChange={toggleTheme}
			/>
			<Label htmlFor='thememode' lit={theme === 'light'}>
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
