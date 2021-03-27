import { addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { withContexts } from '@storybook/addon-contexts';

import { darkTheme, lightTheme } from '../src/themes';

addDecorator(withThemesProvider([darkTheme, lightTheme]));

export const parameters = { actions: { argTypesRegex: '^on[A-Z].*'}};