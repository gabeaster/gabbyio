import React from "react";

function About() {
  return (
    <div className="components about">
      <div className="about-containers" id="top-container">
        This will hold the top elements: Developer, Learner, Teacher
        <div className="developer-container">
          this will hold the developer details
        </div>
        <div className="learner-container">
          this will hold the learner details
        </div>
        <div className="educator-container">
          This will hold the edducator details
        </div>
      </div>
      <div className="about-containers" id="middle-container">
        This will hold the middle elements including the main Middle
        Image/Feature G or Gabby/ potentially picture?
      </div>
      <div className="about-containers" id="bottom-container">
        this will hold the bottom three elements: mother, wife, traveller
      </div>
    </div>
  );
}

export default About;
