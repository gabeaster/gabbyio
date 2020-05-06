import React, { useState, useRef } from "react";
import ReactHover from "react-hover";

function About() {
  //pseudo
  //if hover is true for .developer-container, #dev-flip adds class "show"; if .developer-container is false, #dev-flip should not have class "show"
  const [showDev, setShowDev] = useState(false);
  const [showLead, setShowLead] = useState(false);
  const [showEd, setShowEd] = useState(false);
  const [showHov, setShowHov] = useState(true);

  return (
    <div className="components about">
      <div className="twinkling"></div>
      <div className="clouds"></div>
      {showHov && (
        <p
          className="animated fast heartBeat hover-img "
          // src={require("../assets/hover me.png")}
        >
          Hover Me
        </p>
      )}

      <div className="about-containers" id="top-container">
        <div
          className="top-item-container"
          onMouseEnter={() => setShowHov(false)}
        >
          <div
            id="wrapper-a"
            className="cloud-wrapper"
            onMouseEnter={() => setShowDev(true)}
            onMouseLeave={() => setShowDev(false)}
          >
            <div className="cloud-group">
              <div className="cloud-circle a"></div>
              <div className="cloud-circle b"></div>
              <div className="cloud-circle c"></div>
              <div className="cloud-circle d"></div>
              <div className="cloud-circle e"></div>
              <div className="cloud-circle f"></div>
              <div className="cloud-circle g"></div>
            </div>
            <div className="developer-container top-item item">Developer</div>
          </div>

          <div
            id="wrapper-b"
            className="cloud-wrapper"
            onMouseEnter={() => setShowLead(true)}
            onMouseLeave={() => setShowLead(false)}
          >
            <div className="cloud-group">
              <div className="cloud-circle a"></div>
              <div className="cloud-circle b"></div>
              <div className="cloud-circle c"></div>
              <div className="cloud-circle d"></div>
              <div className="cloud-circle e"></div>
              <div className="cloud-circle f"></div>
              <div className="cloud-circle g"></div>
            </div>
            <div className="learner-container top-item item">Leader</div>
          </div>

          <div
            id="wrapper-c"
            className="cloud-wrapper"
            onMouseEnter={() => setShowEd(true)}
            onMouseLeave={() => setShowEd(false)}
          >
            <div className="cloud-group">
              <div className="cloud-circle a"></div>
              <div className="cloud-circle b"></div>
              <div className="cloud-circle c"></div>
              <div className="cloud-circle d"></div>
              <div className="cloud-circle e"></div>
              <div className="cloud-circle f"></div>
              <div className="cloud-circle g"></div>
            </div>
            <div className="educator-container top-item item">Educator</div>
          </div>
        </div>
      </div>
      <div className="paragraph-container">
        {showDev && (
          <div id="dev" className="developer-flip flip-item item">
            <p>I am a Front-End Developer with a hawk-eye for detail. </p>
          </div>
        )}

        {showLead && (
          <div id="lead" className="leader-flip flip-item item">
            <p>
              I believe that the success of a team depends on the leader. I've
              won Homer Awards for bolstering my team members and having my work
              implemented as best practices.
            </p>
          </div>
        )}
        {showEd && (
          <div id="ed" className="educator-flip flip-item item">
            <p>
              With more than 5 years of teaching experience, I've learned that
              compassion and empathy towards students is vital.
            </p>
          </div>
        )}
      </div>

      <div className="about-containers" id="middle-container">
        <h2>G</h2>
      </div>
    </div>
  );
}

export default About;
