//import Chat from '../src/modules/Chat/Chat';
import Chat from './modules/Chat/Chat.js';
import Dice from './modules/Dice/Dice.js';
import {DiceBag} from './modules/DiceBag/DiceBag';
import {DiceProvider} from './contexts/DiceContext/DiceContext';
import { useState, useContext, useEffect } from 'react';
import { BrowserRouter, Switch, Route, match } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import {
  AlertProvider,
  ModalProvider,
  AuthContext,
  AuthProvider,
  PlayerProvider,
} from './contexts';
import { useDarkMode } from './hooks';
import { AppWrapper, AppHeader, Spinner } from './components';


import { darkTheme, lightTheme } from './shared';
import { GlobalStyle } from './styles';
import { Landing } from './pages';
import ActiveDashboard from './components/ActiveDashboard';

import UploadGame from './components/UploadGame';
import DownloadGame from './components/DownloadGame';
import DeleteGame from './components/DeleteGame';
import LoadGame from './components/LoadGame';
import FileManager from './components/FileBrowser';




import { onAuthStateChange } from './contexts';

export default function App() {
  const diceBag = new DiceBag();
  const [user, setUser] = useState({ loggedIn: false });

  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  useEffect(() => {
    const unsubscribe = onAuthStateChange(setUser);
    return () => unsubscribe();
  }, []);

	return (
		<ThemeProvider theme={themeMode}>
			<AuthProvider value={user}>
				<AlertProvider>
					<PlayerProvider>
						<ModalProvider>
							<>
								<GlobalStyle />
								{!componentMounted ? (
									<Spinner />
								) : (
									<AppWrapper>
										<AppHeader toggleTheme={toggleTheme} />
										<BrowserRouter>
											<Switch>
												<Route path='/' exact component={Landing} />
												<Route
													path='/:userId'
													render={({ match }) => (
														<ActiveDashboard
															match={match}
															userId={match.params.userId}
														/>
													)}
												/>
											</Switch>		
										</BrowserRouter>

										<div className="row align-items-center mt-5">
												<div className="col-3 div-scale section-border">
													<UploadGame />
													<DownloadGame />
													<DeleteGame />
												
												</div>
												<div className="col-4 div-scale section-border">
													<FileManager/>
												</div> 
												<div className="col-5 div-scale section-border">
													<LoadGame />
												</div>   
												
										</div>    

									</AppWrapper>
								)}
							</>
						</ModalProvider>
					</PlayerProvider>
				</AlertProvider>
			</AuthProvider>
		</ThemeProvider>
	);

}
