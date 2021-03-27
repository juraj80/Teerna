import React, { useContext } from 'react';
import {render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AlertContext, AlertProvider } from '../../../contexts';
import Alert from './Alert';
import { Button } from '../../core';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../../themes';

const AlertTrigger = ({}) => {
    const addAlert= useContext(AlertContext);
    return <Button type='button' action={() => addAlert('error', 'Error Alert Text')} status='error'>Create Alert</Button>
}

const setup = () => {
    const { container } = render(
        <ThemeProvider theme={lightTheme}>
            <AlertProvider>
                <AlertTrigger />
            </AlertProvider>
        </ThemeProvider>
    );
    const button = container.querySelector('button');
    return { button, container };
};

test('alert displays', () => {
    const { button } = setup();

    userEvent.click(button);
    const alert = screen.getByRole('alertdialog');

    expect(alert).toBeDefined();
});
