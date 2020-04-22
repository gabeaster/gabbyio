import React from "react";

function Navbar() {
  return (
    <div className="nav-container">
      <div className="overlay">
        <div className="logo-container">
          <div className="logo"></div>
          <div className="tag-line">Making dope shit.</div>
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
            <i class="fab fa-linkedin-in fa-lg"></i>
          </div>
          <div className="github">
            <i class="fab fa-github fa-lg"></i>
          </div>
          <div className="twitter">
            <i class="fab fa-twitter fa-lg"></i>
          </div>
          <div className="Instagram">
            <i class="fab fa-instagram fa-lg"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
