import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Navbar from './MainNavbar.js';
import Landing from'./Landing.js';

function App () {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Landing} />
      </Switch>
    </div>
  );
}

export default App;
