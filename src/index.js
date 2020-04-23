import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
//component imports
import App from "./App";
import About from "./Components/About";
import Work from "./Components/Work";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";

const routing = (
  <Router>
    <div>
      <Route path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="/work" component={Work} />
      <Route path="/resume" component={Resume} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
