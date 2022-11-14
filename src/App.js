import "./App.css";
import Characters from "./components/Characters";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-info my-4">Rick and Morty</h1>

        <div className="container">
          <Characters/>
        </div>
        
      </header>
    </div>
  );
}

export default App;
