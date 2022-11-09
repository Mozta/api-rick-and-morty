import "./App.css";
import Characters from "./components/Characters";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Rick and Morty</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Characters/>
      </header>
    </div>
  );
}

export default App;
