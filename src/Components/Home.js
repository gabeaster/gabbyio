import React from "react";
import Navbar from "./Navbar";

function Home() {
  return (
    <div className="components">
      <Navbar />
      <div className="home-content">
        <div className="home-text">
          <h1>hi, i'm gabby.</h1>
          <h2>let's build our dreams together.</h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
