import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img
            src="https://www.kindpng.com/picc/m/156-1568989_transparent-dictionary-png-reading-and-writing-clip-art.png"
            className="App-logo "
            width="200"
            alt="logo"
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
