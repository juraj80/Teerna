//import Chat from '../src/modules/Chat/Chat';
import { useContext, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import {
	AlertProvider,
	ModalProvider,
	AuthContext,
	AuthProvider,
} from './contexts';
import { useDarkMode } from './hooks';
import { AppWrapper, AppHeader, Spinner } from './components';
import { darkTheme, lightTheme } from './shared';
import { GlobalStyle } from './styles';
import { Landing } from './pages';

export default function App() {
	const [theme, toggleTheme, componentMounted] = useDarkMode();
	const themeMode = theme === 'light' ? lightTheme : darkTheme;

	const { onAuthStateChange } = useContext(AuthContext);

	useEffect(() => {
		const unsubscribe = onAuthStateChange;
		return () => unsubscribe();
	}, []);

	return (
		<ThemeProvider theme={themeMode}>
			<AuthProvider>
				<AlertProvider>
					<ModalProvider>
						<>
							<GlobalStyle />
							{!componentMounted ? (
								<Spinner />
							) : (
								<AppWrapper>
									<AppHeader toggleTheme={toggleTheme} />
									<Landing />
								</AppWrapper>
							)}
						</>
					</ModalProvider>
				</AlertProvider>
			</AuthProvider>
		</ThemeProvider>
	);
}
