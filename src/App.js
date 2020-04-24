import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import "./index.css";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/work" component={Work} />
      <Route path="/resume" component={Resume} />
      <Route path="/contact" component={Contact} />
    </Switch>
  );
}
export default App;
