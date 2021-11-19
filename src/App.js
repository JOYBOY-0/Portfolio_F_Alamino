import React from 'react';
import {Switch, Route} from "react-router-dom";
import Home from './components/home/Home';
import Project from './components/projects/Project';
import AboutMe from './components/about-me/AboutMe';
import Contact from './components/contact/Contact';
import NotFound404 from './components/NotFound404';
import HeaderNav from './components/HeaderNav/HeaderNav';
import './app.css'

function App() {
  return (
    <>
      <HeaderNav />
      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Project} />
        <Route path="/about-me" component={AboutMe} />
        <Route path="/contact" component={Contact} />

        <Route component={NotFound404} />
      </Switch>
    </>
  );
}

export default App;
