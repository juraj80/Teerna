import logo from './logo.svg';
import './App.css';
import Chat from './modules/Chat/Chat.js';
import Dice from './modules/Dice/Dice.js';
import {DiceBag} from './modules/DiceBag/DiceBag';
import {DiceProvider} from './contexts/DiceContext/DiceContext';

function App() {
  const diceBag = new DiceBag();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
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
      </main>
    </div>
  );
}

export default App;
