import logo from '../assets/img/metanoia_newlogo.png';
import '../assets/css/Landing.css';
import '../assets/css/Theme.css';

import ContactComp from '../components/ContactComponent';

import Banner from '../assets/img/bannervideo.gif';

// icons (add)
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { FaUserFriends } from "react-icons/fa";
import { CgCommunity } from "react-icons/cg";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { IoNewspaperOutline } from "react-icons/io5";


// problem + newsletter
import NewsletterImage from '../assets/img/newsletter.png';
import AccessibilityIcon from '../assets/img/accessibility_icon.png';
import ImpactIcon from '../assets/img/impact_icon.png';
import BiasPreventionIcon from '../assets/img/bias_prevention_icon.png';

// Testimonial Images
import Testimonial1 from '../assets/img/testimonial1.03958d1d.svg';
import Testimonial2 from '../assets/img/testimonial2.5df9c9c3.svg';
import Testimonial3 from '../assets/img/testimonial3.8d1ddce2.svg';

import Card from 'react-bootstrap/Card';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Carousel from 'react-bootstrap/Carousel';
import {
  Button,
  Col,
  Container,
  Row,
  Badge,
  Modal,
  FormGroup,
} from 'react-bootstrap';

function Landing() {
  return (
    <>
      {/* <video controls autoplay className="bannerStyles">
        <source src={Banner} type="video/mp4"/>
      </video> */}
      <div className="Landing">
          <div>
            <div className="position-relative">
              {/* shape Hero */}
              <section className="section section-lg section-shaped">
                <div className="shape">
                  <div className="backgroundBanner" ></div>
                </div>
                <Container className="py-lg-md d-flex left">
                  <div className="col px-0">
                    <Row>
                      <Col lg="6">
                        <h1 id="mainTitle" className="display-3 ">
                          Metanoia{' '}
                        </h1>
                        <p id="secondaryText" className="lead">
                          THE DIGITAL LIBRARY THAT INSPIRES MEANINGFUL CONVERSATIONS
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

              </section>
            </div>
          </div>

          <section>
            <br></br>

            <Container className="pt-100"> 
              <Row>
              <h2 id="sectionHeading" className="display-3 pb-50">Recommended Topics</h2>
              </Row>
            </Container>
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <Card.Body className="py-5">
                          <div className="icon icon-shape icon-shape-primary mb-4">
                            <FaUserFriends size={40} />
                          </div>
                          <h6 className="text-primary text-uppercase">
                            Friendship
                          </h6>
                          <Button
                            className="mt-4 btn-dark"
                            href=""
                            onClick={() =>
                              (window.location.href = 'friendshipCatalog')
                            }
                          >
                            Explore
                          </Button>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <Card.Body className="py-5">
                          <div className="icon icon-shape icon-shape-primary mb-4">
                            <CgCommunity size={40} />
                          </div>
                          <h6 className="text-primary text-uppercase">
                            Diversity
                          </h6>
                          <Button
                            className="mt-4 btn-dark"
                            href=""
                            onClick={() =>
                              (window.location.href = 'diversityCatalog')
                            }
                          >
                            Explore
                          </Button>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <Card.Body className="py-5">
                          <div className="icon icon-shape icon-shape-primary mb-4">
                            <BiDotsHorizontalRounded size={40} />
                          </div>
                          <h6 className="text-primary text-uppercase">
                            Miscellaneous
                          </h6>
                          <Button
                            className="mt-4 btn-dark"
                            href=""
                            onClick={() => (window.location.href = 'catalog')}
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

          <section className="section section-lg pt-100">
            <Container>
              <Row className="justify-content-center text-center mb-lg">
                <Col lg="8" className="pb-50">
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
                      style={{ width: '300px' }}
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
                      style={{ width: '300px' }}
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
                      style={{ width: '300px' }}
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
            className="section section-lg pt-100"
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
                      <IoNewspaperOutline size={40} />
                    </div>
                    <h3 id="signUpTitle">
                      Sign up for our personalized newsletter!
                    </h3>
                    <p>
                      A curated book recommendations list every month based on
                      your preferences, just for you!
                    </p>
                    <Button
                      className="btn-icon btn-dark"
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
            className="section section-lg pt-100"
          >
            <Container>
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
                    src={Testimonial1}
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
          </section>

          <section className="pt-100 pb-100">
            <div className="Contact">
              <h2 id="sectionHeading" className="display-3 text">Contact Us</h2>
              {/* modal section */}
              <Container>
                <ContactComp />
                <Row>
                  <Col>
                  <h4 className="contactMethod">
                    <a href="https://www.gmail.com" target="_blank" rel="noreferrer">
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
                      target="_blank" rel="noreferrer"
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
                      target="_blank" rel="noreferrer"
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
          </section>
      </div>
    </>
  );
}

export default Landing;
