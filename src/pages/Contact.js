import logo from '../img/metanoia_newlogo.png';
import './Contact.css';

function Contact() {
  return (
    <>
    <div className="Contact">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, this is the contact page: <code>Contact.js</code>!
        </p>
      </header>
    </div>
    </>
  );
}

export default Contact;
