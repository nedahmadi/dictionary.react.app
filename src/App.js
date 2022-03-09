import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img
            src="http://www.clipartsuggest.com/images/41/dictionary-clip-art-ZcoGMG-clipart.jpg"
            className="App-Logo"
            width="200"
            alt="pic"
          />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>Coded by Neda Ahmadi </small>
        </footer>
      </div>
    </div>
  );
}
