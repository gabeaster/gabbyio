import React from "react";
import "./Styles/css/index.css";
import Navbar from "./Components/Nav & Foot/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1>Hello World</h1>
      </div>
    </div>
  );
}

export default App;
