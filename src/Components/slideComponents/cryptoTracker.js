import React from "react";
import "../../assets/DarkMode.PNG";
function cryptoTracker() {
  return (
    <>
      <div className="project-card tracker">
        <div className="project-links">
          <a
            className="button"
            href="https://dark-mode-sable.now.sh/"
            target="_blank"
          >
            <i class="fas fa-eye fa-3x"></i>
          </a>
          <h2>CryptoTracker</h2>
          <a
            className="github-button"
            href="https://github.com/gabeaster/dark-mode"
            target="_blank"
          >
            <i class="fab fa-github fa-3x"></i>
          </a>
        </div>
        <div className="proj-img-container">
          <img
            src={require("../../assets/DarkMode.PNG")}
            alt="preview of crypto tracker App"
          />
        </div>

        <div className="project-details">
          <div className="details-container">
            <p>
              The crypto tracker project was particularly interesting. My task
              was to enhance an application by building a custom hook that saves
              data to localStorage, building a second custom hook that sets
              dark-mode using state, and using the custom hooks to set and
              persist the dark mode preference.
            </p>
            <ul>
              <li>HTML</li>
              <li>REACT JS</li>
              <li>SASS</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default cryptoTracker;
