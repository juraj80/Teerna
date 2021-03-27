import React from 'react';
import { action } from '@storybook/addon-actions';
import { ThemeToggle } from '../components/core';
import { darkTheme } from '../themes';
import { useTheme } from 'styled-components';

export default {
	title: 'Theme Toggle',
	component: ThemeToggle,
};

export const ToggleOn = () => (
	<ThemeToggle toggleTheme={action.call(useTheme(darkTheme))} />
);

