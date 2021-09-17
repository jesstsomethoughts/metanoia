import logo from '../img/metanoia_newlogo.png';
import './Landing.css';

function Landing() {
  return (
    <>
    <div className="Landing">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, this is the landing page: <code>Landing.js</code>!
        </p>
      </header>
    </div>
    </>
  );
}

export default Landing;
