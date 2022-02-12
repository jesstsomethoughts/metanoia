import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

function ContactComp() {
  return (
    <Col id="modal">
      <Form
        action="https://formkeep.com/f/b05a0d119043"
        accept-charset="UTF-8"
        enctype="multipart/form-data"
        method="POST"
        target="_blank"
      >
        <h4>Want to learn more?</h4>
        <p>We care about your input and experiences!</p>
        <Form.Group className="mb-3" controlId="formBasicName">
          <FloatingLabel
            controlId="floatingInput"
            label="Name"
            className="mb-3"
          >
            <Form.Control
              type="name"
              name="Name"
              id="Name"
              required="required"
              placeholder="Your name"
              required
            />
          </FloatingLabel>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
            for="email-address"
          >
            <Form.Control
              type="email"
              name="Email"
              id="Email"
              placeholder="Enter email"
              required
            />
          </FloatingLabel>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            name="Message"
            id="Message"
            rows={5}
            placeholder="Type a message..."
            required
          />
        </Form.Group>
        <Button className="btn-dark" variant="primary" type="submit">
          Send Message
        </Button>
      </Form>
    </Col>
  );
}

export default ContactComp;
