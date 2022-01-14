import "./Navbar.css";
import Headroom from "headroom.js";

import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Logo from "../img/header_logo.png";
// // import smallerLogo from "assets/img/brand/metanoia_newlogo.png"

class MainNavbar extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
    window.addEventListener("resize", this.handleResize);
  }
  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }
  componentWillUnmount() {
    window.addEventListener("resize", this.handleResize);
  }

  handleResize = (e) => {
    this.setState({ windowWidth: window.innerWidth });
  };

  state = {
    collapseClasses: "",
    collapseOpen: false,
    windowWidth: window.innerWidth,
  };

  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out",
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: "",
    });
  };

  render() {
    return (
      <Navbar variant="dark" className="navbar-main" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand className="mr-lg-5" to="/">
            <Nav.Link
              className="nav-link mx-3"
              activeClassName="nav-link-active"
              href="/"
            >
              <img style={{ height: "60px" }} alt="..." src={Logo} />
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle
            className="nav-toggle"
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse>
            <Nav className="ms-auto ml-5">
              <Nav.Link
                className="nav-link mx-3"
                activeClassName="nav-link-active"
                href="/"
              >
                Home
              </Nav.Link>
              <Nav.Link
                className="nav-link mx-3"
                activeClassName="nav-link-active"
                href="blog"
              >
                Blog
              </Nav.Link>
              <Nav.Link
                className="nav-link mx-3"
                activeClassName="nav-link-active"
                href="about"
              >
                About
              </Nav.Link>
              <Nav.Link
                className="nav-link mx-3"
                activeClassName="nav-link-active"
                href="contact"
              >
                Contact
              </Nav.Link>
            </Nav>
            <Button
              className="btn-light btn-icon mx-3"
              href="subscribe"
              id="subscribe"
            >
              SUBSCRIBE
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default MainNavbar;
