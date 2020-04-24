import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav-container">
      <div className="overlay">
        <div className="logo-container">
          {/* this is a change */}
          <img
            className="logo-image"
            src={require("../assets/gabby_avatar_circle.png")}
            alt="logo img of gabby smiling in glasses"
          />
          <div className="tag-line">
            <h3>SITE UNDER CONSTRUCTIONNN</h3>
            <p>Front End Web Dev</p>
            <p>Collaborator</p>
            <p>Life Long Learner</p>
          </div>
        </div>

        <ul className="links-container">
          <li className="list-item home">
            <Link to={"/"} className="list-item Home">
              Home
            </Link>
            {/* //the selected link thing needs to be done in js */}
            <div className="selected-link"></div>
          </li>
          <li className="list-item About">
            <Link to={"/about"} className="list-item About">
              About
            </Link>
          </li>
          <li className="list-item Work">
            <Link to={"/work"} className="list-item Work">
              Work
            </Link>
          </li>
          <li className="list-item Resume">
            <Link to={"/resume"} className="list-item Resume">
              Resume
            </Link>
          </li>
          <li className="list-item Contact">
            <Link to={"/contact"} className="list-item Contact">
              Contact
            </Link>
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
            {" "}
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
