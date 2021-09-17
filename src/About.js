import logo from './logo.svg';
import './css/About.css';

import Navbar from './MainNavbar.js';
import React from "react";

function About() {
  return (
    <>
    <Navbar />
    <div className="About">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          about page TBD
        </p>
      </header>
    </div>
    </>
  );
}

export default About;
