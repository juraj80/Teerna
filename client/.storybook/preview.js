import { addDecorator } from '@storybook-react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { withContexts } from '@storybook/addon-contexts';

import { darkTheme, lightTheme } from '../src/shared';
import { AlertProvider, AuthProvider, ModalProvider, ModeProvider, SessionProvider } from '../src/contexts';

addDecorator(withThemesProvider([darkTheme, lightTheme]));
addDecorator(withContexts([AlertProvider, AuthProvider, ModalProvider, ModeProvider, SessionProvider]));

export const parameters = {	actions: { argTypesRegex: '^on[A-Z].*' }};
