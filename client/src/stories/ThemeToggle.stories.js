import React from 'react';
import { action } from '@storybook/addon-actions';
import { rgba } from 'polished';
import { ThemeToggle } from '../components';
import { lightTheme, darkTheme } from '../shared';
import { useTheme } from 'styled-components';

export default {
	title: 'Theme Toggle',
	component: ThemeToggle,
	decorators: [
		story => (
			<div
				style={{
					width: '100vw',
					height: '100vh',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					background: rgba(0, 0, 0, 0.9),
				}}
			>
				{story()}
			</div>
		),
	],
};

export const ToggleOn = () => (
	<ThemeToggle toggleTheme={action.call(useTheme(lightTheme))} />
);

export const ToggleOff = () => (
	<ThemeToggle toggleTheme={action.call(useTheme(darkTheme))} />
);
