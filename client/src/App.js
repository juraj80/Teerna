//import Chat from '../src/modules/Chat/Chat';
import Chat from './components/Chat/Chat.js';
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
                    <form method="post" action="/api/game-session">
                    <input type="hidden" name="test" value="foo"/>
                    <input type="hidden" name="user" value={user} />
                    <input type="hidden" name="token" value={user.idToken} />
                    <button type="button" name="log" onclick={() => console.log(user)}>Log</button>
                    <button type="submit" name="Submit">New Game</button>
                  </form>
                  <form method="post" action="/api/game-session/invitation">
                    <input type="hidden" name="token" value={user.idToken} />
                    <div>Game UID: <input type="text" name="guid" /></div>
                    <div>Email to invite: <input type="text" name="email" /></div>
                    <button type="submit" name="Submit">Invite</button>
                  </form>
                    <DiceProvider value={diceBag}>
                      <Chat />
                      <section className="dice">
                        <Dice sides={4}/>
                        <Dice sides={6}/>
                        <Dice sides={8}/>
                        <Dice sides={12}/>
                        <Dice sides={20}/>
                      </section>
                    </DiceProvider>
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
