import { addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { withContexts } from '@storybook/addon-contexts/react';

import { darkTheme, lightTheme } from '../src/shared';
import {
	AlertProvider,
	AuthProvider,
	ModalProvider,
	PlayerProvider,
} from '../src/contexts';

addDecorator(withThemesProvider([darkTheme, lightTheme]));
addDecorator(
	withContexts([AlertProvider, ModalProvider, PlayerProvider, AuthProvider])
);

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
};
