import React from "react";
import "./index.css";
import Navbar from "./Components/Nav & Foot/Navbar";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <div className="context-text">
          <h1>hi, i'm gabby.</h1>
          <h2>let's build our dreams together.</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
