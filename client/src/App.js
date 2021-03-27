import { ThemeProvider } from 'styled-components';
import {
	ActivityProvider,
	AlertProvider,
	AuthProvider,
	ModalProvider,
	SessionProvider,
} from './contexts';
import { Layout } from './components/layout';
import { useDarkMode} from './hooks';
import { darkTheme, lightTheme } from './themes';
import { GlobalStyle } from './styles';
import { Spinner } from './components/feedback';

export default function App() {
	// const [user, setUser] = useState(undefined);
	const [theme, toggleTheme, componentMounted] = useDarkMode();
	
	const themeMode = theme === 'light' ? lightTheme : darkTheme;

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
								<Layout toggleTheme={toggleTheme} />
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
