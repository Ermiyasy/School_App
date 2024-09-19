import logo from './logo.svg';
import './main.css';

function main() {
  return (
    <div className="main">
      <header className="main-header">
        <img src={logo} className="main-logo" alt="logo" />
        <p>
          Edit <code>src/main.js</code> and save to reload.
        </p>
        <a
          className="main-link"
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

export default main;
