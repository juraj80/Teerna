import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { cleanup, screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from './Input';
import { lightTheme } from '../../../themes';


afterEach(cleanup);

const FieldInput = (props) => {
    const [field, setField] = useState('');
    return <Input value={field} setValue={setField} {...props}/>
}

const setup = (props) => {
    const utils = render(
        <ThemeProvider theme={lightTheme}> 
            <FieldInput placeholder='Field' nameAttr='field' requiredField {...props}/>
         </ThemeProvider>
    );
    const input = utils.getByPlaceholderText('Field');
    return { input, ...utils};
}

test('Value of input changes on type', () => {
    const { input } = setup();
    userEvent.type(input, 'testing');
    expect(input.value).toBe('testing');
});
