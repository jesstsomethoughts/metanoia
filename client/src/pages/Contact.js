import '../assets/css/Contact.css';

// additional images/files
import logo from '../assets/img/metanoia_newlogo.png';

// icons
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

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
import PageTitle from "../components/PageTitle";

function Contact() {
  return (
    <>
      <PageTitle titleText={"Contact Us"} />
    <div className="Contact">
      <h2 className="mainText"></h2>
        {/* modal section */}
        <Container>
          <ContactComp />
          <Row>
            <Col>
            <h4 className="contactMethod">
              <a href="https://www.gmail.com" target="_blank">
                <div>
                  <SiGmail size={40} color="red"/>
                  <span className="methodLabel">
                    metanoiabooks.co@gmail.com
                  </span>
                </div>
              </a>
            </h4>
            </Col>
            <Col>
            <h4 className="contactMethod">
              <a
                href="https://www.linkedin.com/company/metanoiabooks/"
                target="_blank"
              >
                <div>
                  <BsLinkedin size={40}/>
                  <span className="methodLabel">@MetanoiaBooks</span>
                </div>
              </a>
            </h4>
            </Col>
            <Col>
            <h4 className="contactMethod">
              <a
                href="https://www.facebook.com/MetanoiaLibrary/"
                target="_blank"
              >
                <div>
                  <BsFacebook size={40}/>
                  <span className="methodLabel"> @MetanoiaLibrary </span>
                </div>
              </a>
            </h4>
          </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Contact;
