import logo from './logo.svg';
import './css/Contact.css';

import Navbar from './MainNavbar.js';
import React from "react";

function Contact() {
  return (
    <>
    <Navbar />
    <div className="About">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello this is the contact page!
        </p>
      </header>
    </div>
    </>
  );
}

export default Contact;
