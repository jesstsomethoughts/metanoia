import './Contact.css';

// additional images/files
import logo from '../img/metanoia_newlogo.png';
import linkedin from '../img/social-icons/linkedin.png';
import facebook from '../img/social-icons/facebook.png';
import gmail from '../img/social-icons/gmail.png';

// react components
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import FormCheck from 'react-bootstrap/FormCheck';
import FormControl from 'react-bootstrap/FormControl';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/esm/Container';
import ContactComp from './ContactComponent';

function Contact() {
  return (
    <>
    <div id = "contactBackground">
      <h2 id ="contactText">Contact Us</h2>
    </div>
    <div className="Contact">
      <h2 className="mainText"></h2>
        {/* modal section */}
    <Container>

      <ContactComp />

      <Col>
    <div className = "social_media">
      <h4 className="contactMethod">
                      <a href="https://www.gmail.com" target="_blank">
                        <div>
                          <img src={gmail} className="imageStyles"></img>
                          {/*
                          <span className="methodLabel">
                            metanoiabooks.co@gmail.com
                          </span>
                          */}
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
                          {/*<span className="methodLabel">@MetanoiaBooks</span>*/}
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
                          {/*<span className="methodLabel">
                            {" "}
                            @MetanoiaLibrary{" "}
                        </span>*/}
                        </div>
                      </a>
                    </h4>
      </div>
      </Col>
      </Container>
    </div>
    </>
  );
}

export default Contact;
