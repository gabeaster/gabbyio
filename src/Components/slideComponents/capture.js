import React from "react";

function Capture() {
  return (
    <>
      <div className="project-card capture">
        <div className="project-links">
          <a
            className="button"
            href="https://ft-expat-journal-1.github.io/Expat-Journal-Marketing-Page/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-eye fa-3x"></i>
          </a>
          <h2>Capture</h2>
          <a
            className="github-button"
            href="https://github.com/FT-Expat-Journal-1/Expat-Journal-Marketing-Page"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github fa-3x"></i>
          </a>
        </div>
        <div className="proj-img-container">
          <img
            className="proj-img"
            src={require("../../assets/CaptureImage.JPG")}
            alt="preview of marketing website for Capture App"
          />
        </div>

        <div className="project-details">
          <div className="details-container">
            <p>
              Capture is a photo-blogging platform for travellers to document
              their journeys. I was the UI Developer responsible for building
              the entire marketing website. In collaboration with the UI/UX
              designer, I was able to produce a fully responsive, attractive
              website to accompany the functioning app. I used Trello to set
              tasks with deadlines to ensure the project was completed on time
              and to specifications in an agile way.
            </p>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>LESS</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default Capture;
