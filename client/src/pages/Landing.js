import logo from '../img/metanoia_newlogo.png';
import '../pages/Landing.css';

import linkedin from '../img/social-icons/linkedin.png';
import facebook from '../img/social-icons/facebook.png';
import gmail from '../img/social-icons/gmail.png';
import NewsletterImage from "../img/newsletter.png";
import AccessibilityIcon from "../img/accessibility_icon.png";
import ImpactIcon from "../img/impact_icon.png";
import BiasPreventionIcon from "../img/bias_prevention_icon.png";
import Testimonial1 from "../img/testimonial1.03958d1d.svg";
import Testimonial2 from "../img/testimonial2.5df9c9c3.svg";
import Testimonial3 from "../img/testimonial3.8d1ddce2.svg";

import Card from "react-bootstrap/Card";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button, Col, Container, Row, Badge, Modal, FormGroup, } from 'react-bootstrap';

function Landing() {
  return (
    <>
    <div className="Landing">
      <header className="App-header">
        <div>
          <section>
            <Container>
              <Row>
                <Col>
                  <img src={logo} className="App-logo" alt="logo" />
                  <h1>Metanoia</h1>
                  <p>THE DIGITAL LIBRARY THAT INSPIRES CONVERSATION</p>
                  <Button className="button" href="subscribe">Get Started</Button>
                </Col>
              </Row>
            </Container>
          </section>
        </div>

        <section>
            <br></br>
            
            <Container>
              {/* <Row className="justify-content-center text-center mb-lg"> */}
              <h2>Recommended Topics</h2>
            </Container>
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0 roundEdges">
                        <Card.Body className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-single-02" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                            Friendship
                          </h6>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                              Pre-K
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              K-2
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              G3-5
                            </Badge>
                          </div>
                          <Button
                            className="mt-4 "
                            color="primary"
                            href=""
                            onClick={() => window.location.href = "friendshipCatalog"}
                          >
                            Explore
                          </Button>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0 roundEdges">
                        <Card.Body className="py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i className="ni ni-world" />
                          </div>
                          <h6 className="text-success text-uppercase">
                            Diversity
                          </h6>
                          <div>
                            <Badge color="success" pill className="mr-1">
                              Pre-K
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              K-2
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              G3-5
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="success"
                            href=""
                            onClick={() => window.location.href = "diversityCatalog"}
                          >
                            Explore
                          </Button>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0 roundEdges">
                        <Card.Body className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-tie-bow" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                            Miscellaneous
                          </h6>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                              Pre-K
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              K-2
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              G3-5
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="warning"
                            href=""
                            onClick={() => window.location.href = "catalog"}
                          >
                            Explore
                          </Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
        
        <section
            // style={{ backgroundColor: "#FCFAD9" }}
            className="section section-lg"
          >
            <Container>
              <Row className="justify-content-center text-center mb-lg">
                <Col lg="8">
                  <h2 id="sectionHeading" className="display-3">
                    The Problem
                  </h2>
                </Col>
              </Row>
              <Row>
                <Col className="mb-4 mb-lg-0" md="4">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={AccessibilityIcon}
                      style={{ width: "300px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span id="beliefs" className="d-block mb-1">
                          Accessibility
                        </span>
                      </h5>
                    </div>
                  </div>
                </Col>
                <Col className="mb-4 mb-lg-0" md="4">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={ImpactIcon}
                      style={{ width: "300px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span id="beliefs" className="d-block mb-1">
                          Social Impact
                        </span>
                      </h5>
                    </div>
                  </div>
                </Col>
                <Col className="mb-4 mb-lg-0" md="4">
                  {/* maybe add lg="3" md="6"?? */}
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={BiasPreventionIcon}
                      style={{ width: "300px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span id="beliefs" className="d-block mb-1">
                          Bias Prevention
                        </span>
                      </h5>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

        <section
            style={{ backgroundColor: "#FFFEF5" }}
            className="section section-lg"
          >
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={NewsletterImage}
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-danger shadow rounded-circle mb-5">
                      <i className="ni ni-settings-gear-65" />
                    </div>
                    <h3 id="signUpTitle">
                      Sign up for our personalized newsletter!
                    </h3>
                    <p>
                      A curated book recommendations list every month based on
                      your preferences, just for you!
                    </p>
                    <Button
                      className="btn-icon"
                      // className="button"
                      href="subscribe"
                      id="subscribeBtn"
                    >
                      <span className="nav-link-inner--text ml-1">
                        Sign Up Here
                      </span>
                    </Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          <section>
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
                Submit
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
      </section>
          
      </header>
    </div>
    </>
  );
}

export default Landing;
