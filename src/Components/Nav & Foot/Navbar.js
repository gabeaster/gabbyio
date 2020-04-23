import React from "react";

function Navbar() {
  return (
    <div className="nav-container">
      <div className="overlay">
        <div className="logo-container">
          <img
            className="logo-image"
            src={require("../../assets/gabby_avatar_circle.png")}
            alt="logo img of gabby smiling in glasses"
          />
          <div className="tag-line">
            Front End Web Dev <br />
            Collaborator
            <br />
            Life Long Learner
          </div>
        </div>

        <ul className="links-container">
          <li className="list-item home">
            <a>Home</a>
            {/* //the selected link thing needs to be done in js */}
            <div className="selected-link"></div>
          </li>
          <li className="list-item About">
            <a>About</a>
          </li>
          <li className="list-item Work">
            <a>Work</a>
          </li>
          <li className="list-item Resume">
            <a>Resume</a>
          </li>
          <li className="list-item Contact">
            <a>Contact</a>
          </li>
        </ul>
        <div className="social-container">
          <div className="linkedin">
            <a href="https://www.linkedin.com/in/gabbyeaster/">
              <i class="fab fa-linkedin-in fa-lg"></i>
            </a>
          </div>
          <div className="github">
            <a href="https://github.com/gabeaster">
              <i class="fab fa-github fa-lg"></i>
            </a>
          </div>
          <div className="twitter">
            <a href="https://twitter.com/devGABBYdev">
              <i class="fab fa-twitter fa-lg"></i>
            </a>
          </div>
          <div className="Instagram">
            <a href="https://www.instagram.com/gabmonsterrawr/">
              <i class="fab fa-instagram fa-lg"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
