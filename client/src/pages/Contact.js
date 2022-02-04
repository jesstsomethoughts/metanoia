import '../assets/css/Contact.css';

// additional images/files
import logo from '../assets/img/metanoia_newlogo.png';
import linkedin from '../assets/img/social-icons/linkedin.png';
import facebook from '../assets/img/social-icons/facebook.png';
import gmail from '../assets/img/social-icons/gmail.png';

// react components
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import FormCheck from 'react-bootstrap/FormCheck';
import FormControl from 'react-bootstrap/FormControl';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/esm/Container';
import ContactComp from '../components/ContactComponent';

function Contact() {
  return (
    <>
      <div className="Contact">
        <h2 className="mainText">Contact Us</h2>
        {/* modal section */}
        <Container>
          <ContactComp />

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
                  <span className="methodLabel"> @MetanoiaLibrary </span>
                </div>
              </a>
            </h4>
          </Col>
        </Container>
      </div>
    </>
  );
}

export default Contact;
