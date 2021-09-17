import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Navbar from './MainNavbar.js';
import Landing from'./Landing.js';
import About from './About.js';
import Contact from './Contact.js';
import Subscribe from './Subscribe.js';

function App () {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact render={props => <Landing {...props} />} />
      </Switch>
      <Switch>
        <Route path="/about" exact render={props => <About {...props} />} />
      </Switch>
      <Switch>
        <Route path="/contact" exact render={props => <Contact {...props} />} />
      </Switch>
      <Switch>
        <Route path="/subscribe" exact render={props => <Subscribe {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
