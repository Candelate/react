import logo from './logo.svg';
import './App.css';

function App() {
  const persona = {
    Nombre : 'Candela',
    Edad : '20',
    Altura : '1.63'
  }
  const nuevaPersona = {
    ...persona,
    edad:'21'
  }
  console.log(persona)
  console.log(nuevaPersona)
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
    </div>
  );
}

export default App;
