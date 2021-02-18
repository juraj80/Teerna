import { useState } from 'react';
import { func } from 'prop-types';
import { useDarkMode } from '../../hooks';
import { Tooltip } from '../Tooltip';
import { Checker, CheckerLabel, Toggle } from './styles';

const ThemeToggle = ({ toggleTheme }) => {
	const [showTooltip, setShowTooltip] = useState(false);
	const { theme } = useDarkMode();

	return (
		<>
			<Checker
				// style={{ marginLeft: '16px' }}
				onChange={toggleTheme}
				id='toggle'
				type='checkbox'
			/>
			<CheckerLabel
				htmlFor='toggle'
				onMouseEnter={() => setShowTooltip(true)}
				onMouseLeave={() => setShowTooltip(false)}
			>
				<Toggle />
			</CheckerLabel>
			<Tooltip
				show={showTooltip}
				position='bottom'
				helperText={`switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
			/>
		</>
	);
};

ThemeToggle.propTypes = {
	toggleTheme: func.isRequired,
};

export default ThemeToggle;
