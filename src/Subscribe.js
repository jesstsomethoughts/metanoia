import logo from './logo.svg';
import './css/Subscribe.css';

import Navbar from './MainNavbar.js';
import React from "react";

function Subscribe() {
  return (
    <>
    <Navbar />
    <div className="About">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello this is the subscribe page!
        </p>
      </header>
    </div>
    </>
  );
}

export default Subscribe;
