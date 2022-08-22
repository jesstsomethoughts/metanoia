import React from 'react';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/MainNavbar.js';
import Landing from './pages/Landing.js';
import Contact from './pages/Contact.js';
import About from './pages/About.js';
import Subscribe from './pages/Subscribe.js';
import Catalog from './pages/Catalog.js';
import friendshipCatalog from './pages/friendshipCatalog.js';
import diversityCatalog from './pages/diversityCatalog.js';
import Blog_Article_Merge from './pages/Blog.js';
import Footer from './components/Footer.js';
import SignIn from "./pages/SignIn.js";
import Register from "./pages/Register.js";
import Settings from "./pages/Settings.js";
import BlogCreate from "./pages/BlogCreate.js";
import BlogEdit from "./pages/BlogEdit";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/signin" component={SignIn} />
        <Route path="/register" component={Register} />
        <Route path="/settings" component={Settings} />
        <Route path="/blogcreate" component={BlogCreate} />
        <Route path="/blogedit" component={BlogEdit} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/subscribe" component={Subscribe} />
        <Route path="/catalog" component={Catalog} />
        <Route path="/friendshipCatalog" component={friendshipCatalog} />
        <Route path="/diversityCatalog" component={diversityCatalog} />
        <Blog_Article_Merge />
      </Switch>
      <Footer />
    </div>
  );
}
//Eventually the footer will go between '</Switch>' and '</div>'

export default App;
