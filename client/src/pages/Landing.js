import logo from '../img/metanoia_newlogo.png';
import '../pages/Landing.css';

import NewsletterImage from "../img/newsletter.png";
import AccessibilityIcon from "../img/accessibility_icon.png";
import ImpactIcon from "../img/impact_icon.png";
import BiasPreventionIcon from "../img/bias_prevention_icon.png";

function Landing() {
  return (
    <>
    <div className="Landing">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, this is the landing page: <code>Landing.js</code>!
        </p>

      </header>
    </div>
    </>
  );
}

export default Landing;


// // reactstrap components
// import {
//   Alert,
//   Badge,
//   Button,
//   Card,
//   CardBody,
//   CardImg,

