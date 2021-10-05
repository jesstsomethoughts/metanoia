import React from 'react';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/MainNavbar.js';
import Landing from'./pages/Landing.js';
import Contact from './pages/Contact.js';
import About from './pages/About.js';
import Subscribe from './pages/Subscribe.js';

function App () {
  return ( 
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/subscribe" component={Subscribe} />
      </Switch>
    </div>
  );
}
//Eventually the footer will go between '</Switch>' and '</div>'

export default App;
