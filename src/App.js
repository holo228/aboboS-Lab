import logo from './logomarvel.png';
import './App.css';
import CharactersNames from "./CharactersNames";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <CharactersNames />
        </p>
      </header>
    </div>
  );
}

export default App;
