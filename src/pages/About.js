import logo from '../img/metanoia_newlogo.png';
import './About.css';

function About() {
  return (
    <>
    <div className="About">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, this is the about page: <code>About.js</code>!
        </p>
      </header>
    </div>
    </>
  );
}

export default About;
