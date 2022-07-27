import '../assets/css/Navbar.css';

import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

import Logo from '../assets/img/header_logo.png';
// // import smallerLogo from "assets/img/brand/metanoia_newlogo.png"
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from '../state/thunks/logoutUser';

function MainNavbar() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData);

  async function dispatchLogoutUser(e) {
    e.preventDefault();
    dispatch(logoutUser());
  }

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  return (
    <Navbar variant="dark" className="navbar-main" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand className="mr-lg-5" to="/">
          <Nav.Link
            onClick={scrollToTop}
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
              onClick={scrollToTop}
              as={ Link }
              className="nav-link mx-3"
              activeClassName="nav-link-active"
              to="/"
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={scrollToTop}
              as={ Link }
              className="nav-link mx-3"
              activeClassName="nav-link-active"
              to="/blog"
            >
              Blog
            </Nav.Link>
            <Nav.Link
              onClick={scrollToTop}
              as={ Link }
              className="nav-link mx-3"
              activeClassName="nav-link-active"
              to="/friendshipCatalog"
            >
              Catalog
            </Nav.Link>
            <Nav.Link
              onClick={scrollToTop}
              as={ Link }
              className="nav-link mx-3"
              activeClassName="nav-link-active"
              to="/about"
            >
              About
            </Nav.Link>
            <Nav.Link
              onClick={scrollToTop}
              as={ Link }
              className="nav-link mx-3"
              activeClassName="nav-link-active"
              to="/contact"
            >
              Contact
            </Nav.Link>
            {userData.user ?
            <Nav.Link
              onClick={dispatchLogoutUser}
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
            onClick={scrollToTop}
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
