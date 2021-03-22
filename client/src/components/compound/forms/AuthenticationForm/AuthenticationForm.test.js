import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import { lightTheme} from '../../../../themes';
import { AuthProvider } from '../../../../contexts';
import AuthenticationForm from "./AuthenticationForm";

test('switch between login and register form content', () => {
    const {container} = render(
        <ThemeProvider theme={lightTheme}>
             <AuthProvider>
                <AuthenticationForm initialState='login'/>
            </AuthProvider>
        </ThemeProvider>);
    let form = screen.getByRole('form');
    const switcher = container.getElementsByClassName('switch-tab')[0];

    expect(form.id).toBe('register-form');
    userEvent.click(switcher);
    
    form = screen.getByRole('form');
    expect(form.id).toBe('login-form');
})