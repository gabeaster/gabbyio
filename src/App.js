import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="content-container">
        {/* <div className="twinkling"></div> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/work" component={Work} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </>
  );
}
export default App;
