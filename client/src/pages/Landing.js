import logo from '../img/metanoia_newlogo.png';
import '../pages/Landing.css';

import ContactComp from './ContactComponent';


import linkedin from '../img/social-icons/linkedin.png';
import facebook from '../img/social-icons/facebook.png';
import gmail from '../img/social-icons/gmail.png';
import Banner from '../img/website-image.png';
import NewsletterImage from "../img/newsletter.png";
import AccessibilityIcon from "../img/accessibility_icon.png";
import ImpactIcon from "../img/impact_icon.png";
import BiasPreventionIcon from "../img/bias_prevention_icon.png";

// Icons

// Testimonial Images
import Testimonial1 from "../img/testimonial1.03958d1d.svg";
import Testimonial2 from "../img/testimonial2.5df9c9c3.svg";
import Testimonial3 from "../img/testimonial3.8d1ddce2.svg";

import Card from "react-bootstrap/Card";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Carousel from 'react-bootstrap/Carousel'
import { Button, Col, Container, Row, Badge, Modal, FormGroup, } from 'react-bootstrap';


function Landing() {
  return (
    <>
    <div className="Landing">
      <header className="App-header">
        <div>
        <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-300">
              <div className="shape shape-style-1 shape-default cont">
                <img alt="..." src={Banner} className="bannerStyles" />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 id="mainTitle" className="display-3 ">
                        Metanoia{" "}
                      </h1>
                      <p id="secondaryText" className="lead">
                        THE DIGITAL LIBRARY THAT INSPIRES CONVERSATIONS
                      </p>
                      <div className="btn-wrapper">
                        <Button className="button" href="subscribe">
                          Get Started
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    // style={{fill:"#FCFAD9"}}
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
          </div>
        </div>

        <section>
            <br></br>
            
            <Container>
              {/* <Row className="justify-content-center text-center mb-lg"> */}
              <h2 className="headerText">Recommended Topics</h2>
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
          
          <section
            style={{ backgroundColor: "#FFFEF5" }}
            className="section section-lg "
          >
            {/* section section-lg bg-gradient-default */}
            <Container className="pb-300">
              <Row className="text-center justify-content-center">
                <Col lg="10">
                  <h2 id="sectionHeading" className="display-3 text">
                    Testimonials
                  </h2>
                  <p id="beliefs" className="lead text">
                    Read below for what our customers had to say.
                  </p>
                </Col>
              </Row>
              {/* <Row className="row-grid mt-5"> */}
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src= {Testimonial1}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Testimonial2}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Testimonial3}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
              {/* </Row> */}
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>

          <section>
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
