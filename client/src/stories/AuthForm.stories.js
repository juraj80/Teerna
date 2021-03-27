import { ThemeProvider } from 'styled-components';
import { AuthenticationForm } from '../components/compound/forms';
import { Modal } from '../components/core';
import { AuthProvider, ModalProvider } from '../contexts';
import { darkTheme, lightTheme } from '../themes';


export default {
	title: 'Authentication Form',
	component: AuthenticationForm,
};

export const Light = () => {

	return (
		<ThemeProvider theme={lightTheme}>
			<AuthProvider>
				<ModalProvider>
					<Modal state='entered' updateShow={() => {}}>
						<AuthenticationForm initialState='login' />
					</Modal>
				</ModalProvider>
			</AuthProvider>
		</ThemeProvider>
	);
};

export const Dark = () => {

	return (
		<ThemeProvider theme={darkTheme}>
			<AuthProvider>
				<ModalProvider>
					<Modal state='entered' updateShow={() => {}}>
						<AuthenticationForm initialState='login' />
					</Modal>
				</ModalProvider>
			</AuthProvider>
		</ThemeProvider>
	);
};

