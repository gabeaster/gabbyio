import React, { useState } from "react";

function About() {
  const [showDev, setShowDev] = useState(false);
  const [showLead, setShowLead] = useState(false);
  const [showEd, setShowEd] = useState(false);
  const [showHov, setShowHov] = useState(true);

  return (
    <div className="components about">
      <div className="twinkling"></div>
      <div className="clouds"></div>
      {showHov && (
        <p className="animated fast heartBeat hover-img ">Hover Me</p>
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
            <p>
              As a developer with a hawk-eye for detail, I've logged over a
              thousand hours of coding and have been endorsed for more than 20
              skills including Front-End Development, React JS, and Responsive
              Design on LinkedIn. Pair-programming, brainstorming, and
              collaborating with peers ensures I'm constantly learning and
              pushing my skills further. What I love most about being a
              developer is diving into projects knowing that I have the
              resources to solve problems and build beautiful designs.
            </p>
          </div>
        )}
        {showLead && (
          <div id="lead" className="leader-flip flip-item item">
            <p>
              Understanding how to organize, prioritize, and delegate tasks
              while working on a team is vital to the success and quality of the
              final product. I have experience setting clear, easy-to-understand
              agile tasks while tracking and managing project progression on
              Trello.
              <br />
              With cross-cultural and cross-departmental leadership experience,
              I know that the communication and culture of a team can fuel
              excitement, passion, and a drive to deliver.
            </p>
          </div>
        )}
        {showEd && (
          <div id="ed" className="educator-flip flip-item item">
            <p>
              As an educator and curriculum developer, it's been my job to
              tailor the learning experience to the needs of the group and the
              individual. Time-management is a Director of Education's best
              friend while planning, training, evaluating, and teaching a full
              class load. Whether I'm teaching children their colors in English
              or training new team members on best practices, I never forget my
              4 C's:
              <p className="center">
                Compassion, Creativity, Collaboration, and Coaching.
              </p>
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
