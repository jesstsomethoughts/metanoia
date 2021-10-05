import './Navbar.css';
import Headroom from "headroom.js";

import React from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Collapse from 'react-bootstrap/Collapse';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';

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
    if (this.state.windowWidth < 992) {
      var a = (
        <Nav className="navbar-main justify-content-center" activeKey="/home">
            <Nav.Link
            className="nav-link-icon"
            href="subscribe" //
            >
            <i className="ni ni-bold-right d-lg-none mr-1" />
            <span className="nav-link-inner--text">Subscribe</span>
            </Nav.Link>
        </Nav>
      );
    } else {
      var b = (
        <Button
          className="btn-light btn-icon"
          href="subscribe"
          id="subscribe"
        >
          <span className="nav-link-inner--text">SUBSCRIBE</span>
        </Button>
      );
    }

    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main"
            id="navbar-main"
            expand="lg"
            sticky="top"
          >
              <Container>
                    <Navbar.Brand className="mr-lg-5" to="/">
                        <img style={{height: '60px'}} alt="..." src={Logo} />
                    </Navbar.Brand>
                    {/* <button className="navbar-toggler" id="navbar-">
                        <span className="navbar-toggler-icon" />
                    </button> */}
                    <Nav navbar>
                        <Nav.Item>
                            <Nav.Link className="nav-link" href="/">
                                <span className="nav-text">Home</span>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="about">
                                <span className="nav-text">About</span>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="contact">
                                <span className="nav-text">Contact</span>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            {a}
                            {b}
                        </Nav.Item>
                    </Nav>
              </Container>
          </Navbar>
        </header>
      </>
    );
  }
 }

export default MainNavbar;
