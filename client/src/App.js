import { useState } from 'react';
import decode from 'jwt-decode';
import { ThemeProvider } from 'styled-components';
import {
	AlertProvider,
	AuthProvider,
	InteractionProvider,
	ModalProvider,
	SessionProvider,
} from './contexts';
import { HeaderBar, Console, Spinner, Sidebar } from './components';
import { useConstructor, useDarkMode } from './hooks';
import { darkTheme, lightTheme, GlobalStyle } from './shared';

export default function App() {
	const [user, setUser] = useState(undefined);
	const [theme, toggleTheme, componentMounted] = useDarkMode();

	const themeMode = theme === 'light' ? lightTheme : darkTheme;

	useConstructor(() => {
		const token = localStorage.getItem('token');
		token && setUser(decode(token));
	});
	

	return (
		<ThemeProvider theme={themeMode}>
			<AuthProvider>
				<AlertProvider>
					<ModalProvider>
						<SessionProvider>
							<InteractionProvider>
								<>
									<GlobalStyle />
									{!componentMounted ? (
										<Spinner />
									) : (
										<Console>
											<HeaderBar toggleTheme={toggleTheme} user={user} />
											<Sidebar user={user} />
										</Console>
									)}
								</>
							</InteractionProvider>
						</SessionProvider>
					</ModalProvider>
				</AlertProvider>
			</AuthProvider>
		</ThemeProvider>
	);
}
