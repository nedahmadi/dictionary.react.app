import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img
            src="https://clipartstation.com/wp-content/uploads/2017/11/dictionary-clipart.jpg"
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
