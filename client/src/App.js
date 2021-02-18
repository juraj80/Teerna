// import { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
// import { Chat, Dice, DiceBag } from './modules';
import {
	AlertProvider,
	AuthProvider,
	// DiceProvider,
	ModalProvider,
	PlayerProvider,
} from './contexts';
import { useDarkMode } from './hooks';
import { Spinner, Console, Appbar, Navbar, Sidebar } from './components';
import { darkTheme, lightTheme, GlobalStyle } from './shared';
// import { UploadGame, DeleteGame, DownloadGame, LoadGame, FileManager } from './components';
// import UploadGame from './components/UploadGame';
// import DownloadGame from './components/DownloadGame';
// import DeleteGame from './components/DeleteGame';
// import LoadGame from './components/LoadGame';
// import FileManager from './components/FileBrowser';
// import { onAuthStateChange } from './contexts';

export default function App() {
	const [theme, toggleTheme, componentMounted] = useDarkMode();
	const themeMode = theme === 'light' ? lightTheme : darkTheme;

	// const diceBag = new DiceBag();

	return (
		<BrowserRouter>
			<ThemeProvider theme={themeMode}>
				<AuthProvider>
					<AlertProvider>
						<PlayerProvider>
							<ModalProvider>
								<>
									<GlobalStyle />
									{!componentMounted ? (
										<Spinner />
									) : (
										<Console>
											<Navbar toggleTheme={toggleTheme} />
											<div style={{ display: 'flex' }}>
												<Sidebar />
												<Appbar />
											</div>
											{/* <Switch>
												{/*<Route exact path='/' component={Landing} />
												 	<Route path='/dashboard/GM' component={GMDashboard} />
													<Route
													path='/dashboard/player'
													component={PlayerDashboard}
												/> 
												<Redirect to='/'/>
											</Switch> */}
										</Console>
									)}
								</>
							</ModalProvider>
						</PlayerProvider>
					</AlertProvider>
				</AuthProvider>
			</ThemeProvider>
		</BrowserRouter>
	);
	// <div className='row align-items-center mt-5'>
	// 							<div className='col-3 div-scale section-border'>
	// 								<UploadGame />
	// 								<DownloadGame />
	// 								<DeleteGame />
	// 							</div>
	// 							<div className='col-4 div-scale section-border'>
	// 								<FileManager />
	// 							</div>
	// 							<div className='col-5 div-scale section-border'>
	// 								<LoadGame />
	// 							</div>
	// 						</div>
}
