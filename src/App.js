import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Navbar from './components/MainNavbar.js';
import Landing from'./pages/Landing.js';

function App () {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" component={Landing} />
      </Switch>
    </div>
  );
}

export default App;
