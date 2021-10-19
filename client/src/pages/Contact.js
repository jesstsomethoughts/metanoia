import './Contact.css';

// additional images/files
import logo from '../img/metanoia_newlogo.png';
import linkedin from '../img/social-icons/linkedin.png';
import facebook from '../img/social-icons/facebook.png';
import gmail from '../img/social-icons/gmail.png';

// react components
import Col from 'react-bootstrap/Col';

function Contact() {
  return (
    <>
    <div className="Contact">
      <header className="App-header">
        {/* modal section */}
        <h4 id = "learn-more">Want to learn more?</h4>
        <p id = "input">We care about your input and experiences!</p>
        {/* add inputs here: name, email address, type a message */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, this is the contact page: <code>Contact.js</code>!
        </p>
      </header>

      <Col>
      <h4 className="contactMethod">
                      <a href="https://www.gmail.com" target="_blank">
                        <div>
                          <img src={gmail} className="imageStyles"></img>
                          <span className="methodLabel">
                            metanoiabooks.co@gmail.com
                          </span>
                        </div>
                      </a>
                    </h4>
                    <h4 className="contactMethod">
                      <a
                        href="https://www.linkedin.com/company/metanoiabooks/"
                        target="_blank"
                      >
                        <div>
                          <img src={linkedin} className="imageStyles"></img>
                          <span className="methodLabel">@MetanoiaBooks</span>
                        </div>
                      </a>
                    </h4>
                    <h4 className="contactMethod">
                      <a
                        href="https://www.facebook.com/MetanoiaLibrary/"
                        target="_blank"
                      >
                        <div>
                          <img src={facebook} className="imageStyles"></img>
                          <span className="methodLabel">
                            {" "}
                            @MetanoiaLibrary{" "}
                          </span>
                        </div>
                      </a>
                    </h4>
      </Col>
    </div>
    </>
  );
}

export default Contact;
