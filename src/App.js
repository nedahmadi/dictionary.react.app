import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img
            src="https://findicons.com/files/icons/2595/leopard_graphite/512/dictionary.png"
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
