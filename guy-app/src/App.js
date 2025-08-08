import logo from './Oiiaoiia.png';
import './App.css';
import Hello from './Hello';  
import Bye from './Bye';
import JSXExamples from './components/JSXExamples.jsx';

function App() {
  return (
    <div className="App">
      <Hello />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello This is a React App!
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
      <Bye />
      <JSXExamples />
    </div>
  );
}

export default App;
