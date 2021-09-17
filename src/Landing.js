import logo from './logo.svg';
import './Landing.css';

import Navbar from './MainNavbar.js';

function Landing() {
  return (
    <>
    <Navbar />
    <div className="Landing">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello <code>src/Landing.js</code> hope this works!
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
    </>
  );
}

export default Landing;
