import Dictionary from "./Dictionary";
import './App.css';

function App() {
  return (
    <div className="App">
        <header className="App-header">
            DICTIONARY
        </header>
        <div className = "container">
          <main>
            <Dictionary defaultKeyword = "diploma"/>
          </main>
        </div>
        <footer className = "App-footer">
            <small>
          Coded by <a href = "https://github.com/megan-levy">Megan Levy</a>
            </small>
          </footer>
    </div>
  );
}

export default App;
