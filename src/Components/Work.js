import React from "react";

function Work() {
  return (
    <div className="components work">
      <div className="projects-container">
        <div className="selected-link A"></div>
        <div className="selected-link B"></div>
        <div className="selected-link C"></div>
        <div className="selected-link D"></div>
        <div className="project-card capture">
          <div className="project-links">
            <a
              className="button"
              href="https://ft-expat-journal-1.github.io/Expat-Journal-Marketing-Page/index.html"
              target="_blank"
            >
              <i class="fas fa-eye fa-3x"></i>
            </a>
            <h2>Capture</h2>
            <a
              className="github-button"
              href="https://github.com/FT-Expat-Journal-1/Expat-Journal-Marketing-Page"
              target="_blank"
            >
              <i class="fab fa-github fa-3x"></i>
            </a>
          </div>
          <div className="proj-img-container">
            <img
              src={require("../assets/CaptureImage.PNG")}
              alt="preview of marketing website for Capture App"
            />
          </div>

          <div className="project-details">
            <div className="details-container">
              <p>
                Capture is a photo-blogging platform for travellers to document
                their journeys. I was the Front-End Web Developer responsible
                for building the entire marketing website. In collaboration with
                the UI/UX designer, I was able to produce a fully responsive,
                attractive website to accompany the functioning app. I used
                Trello to set tasks to complete with deadlines to ensure the
                project was completed on time and to specifications.
              </p>
              <ul>
                <li>HTML/CSS</li>
                <li>LESS</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="project-card to-do">
          <h1></h1>
          <img
            src={require("../assets/todo-list.PNG")}
            alt="todo list with one task completed"
          />
          <div className="project-details">
            <div className="details-container">
              <p></p>
              <div className="details-right">
                <ul>
                  <li></li>
                </ul>
                <a className="button" href="link to project" target="_blank">
                  check it out>
                </a>
                <a className="github-button" href="" target="_blank">
                  <i class="fab fa-github fa-lg"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
