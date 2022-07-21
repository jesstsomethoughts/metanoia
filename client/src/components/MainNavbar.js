import '../assets/css/Navbar.css';

import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

import Logo from '../assets/img/header_logo.png';
// // import smallerLogo from "assets/img/brand/metanoia_newlogo.png"
import { useSelector } from "react-redux";

function MainNavbar() {
  const userData = useSelector((state) => state.userData);

  return (
    <Navbar variant="dark" className="navbar-main" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand className="mr-lg-5" to="/">
          <Nav.Link
            as={ Link }
            className="nav-link mx-3"
            activeClassName="nav-link-active"
            to="/"
          >
            <img className="logo" style={{ height: '60px' }} alt="..." src={Logo} />
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle
          className="nav-toggle"
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse>
          <Nav className="ms-auto ml-5">
            <Nav.Link
              as={ Link }
              className="nav-link mx-3"
              activeClassName="nav-link-active"
              to="/"
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={ Link }
              className="nav-link mx-3"
              activeClassName="nav-link-active"
              to="/blog"
            >
              Blog
            </Nav.Link>
            <Nav.Link
              as={ Link }
              className="nav-link mx-3"
              activeClassName="nav-link-active"
              to="/friendshipCatalog"
            >
              Catalog
            </Nav.Link>
            <Nav.Link
              as={ Link }
              className="nav-link mx-3"
              activeClassName="nav-link-active"
              to="/about"
            >
              About
            </Nav.Link>
            <Nav.Link
              as={ Link }
              className="nav-link mx-3"
              activeClassName="nav-link-active"
              to="/contact"
            >
              Contact
            </Nav.Link>
            {userData.user ?
            <Nav.Link
              as={ Link }
              className="nav-link mx-3"
              activeClassName="nav-link-active"
              to="/settings"
            >
              {userData.user.email}
              </Nav.Link>
              :
              <></>
            }
          </Nav>
          <Button
            as={ Link }
            className="btn-light btn-icon mx-3"
            to="/subscribe"
            id="subscribe"
          >
            SUBSCRIBE
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
