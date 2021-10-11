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

function Contact() {
  return (
    <>
    <div className="Contact">
      <h2 className="mainText">Contact Us</h2>
        {/* modal section */}
    <Container>
    <Col id="modal">
      <Form>
        <h4>Want to learn more?</h4>
        <p>We care about your input and experiences!</p>
        <Form.Group className="mb-3" controlId="formBasicName">
          <FloatingLabel
            controlId="floatingInput"
            label="Name"
            className="mb-3"
            >
            <Form.Control type="name" placeholder="Your name" />
          </FloatingLabel>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
            >
          <Form.Control type="email" placeholder="Enter email" />
        </FloatingLabel>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={5} placeholder="Type a message..." />
        </Form.Group>
        <Button variant="primary" type="submit">
          Send Message
        </Button>
      </Form>
        {/* add inputs here: name, email address, type a message */}
      </Col>
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
      </Container>
    </div>
    </>
  );
}

export default Contact;
