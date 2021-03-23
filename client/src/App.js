import { useState, useEffect } from 'react';
import decode from 'jwt-decode';
import { ThemeProvider } from 'styled-components';
import {
	ActivityProvider,
	AlertProvider,
	AuthProvider,
	// InteractionProvider,
	ModalProvider,
	SessionProvider,
	// SessionProvider,
} from './contexts';
import { Layout } from './components/layout';
import { useConstructor, useDarkMode} from './hooks';
import { darkTheme, lightTheme } from './themes';
import { GlobalStyle } from './styles';
import { Spinner } from './components/feedback';

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
				<SessionProvider>
				<AlertProvider>
					<ModalProvider>
						<ActivityProvider>
						<>
							<GlobalStyle />
							{!componentMounted ? (
								<Spinner />
							) : (
								<Layout user={user} toggleTheme={toggleTheme} />
							)}
						</>
						</ActivityProvider>
					</ModalProvider>
				</AlertProvider>
				</SessionProvider>
			</AuthProvider>
		</ThemeProvider>
	);
}
