import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav-container">
      <div className="overlay">
        <div className="logo-container">
          <img
            className="logo-image"
            src={require("../assets/Gabby Avatar mod transparent2.png")}
            alt="logo img of gabby smiling in glasses"
          />
          <div className="tag-line">
            <p>
              Front End Developer. Collaborator. <br />
              Life Long Learner.
            </p>
          </div>
        </div>

        <ul className="links-container">
          <li className="list-item home animated bounceInLeft">
            <NavLink
              exact
              to={"/"}
              className="list-item Home"
              activeClassName="list-item Home active"
            >
              Home
            </NavLink>
          </li>
          <li className="list-item About animated bounceInLeft">
            <NavLink
              exact
              to={"/about"}
              className="list-item About"
              activeClassName="list-item About active"
            >
              About
            </NavLink>
          </li>
          <li className="list-item Work animated bounceInLeft ">
            <NavLink
              exact
              to={"/work"}
              className="list-item Work"
              activeClassName="list-item Work active"
            >
              Work
            </NavLink>
          </li>
          <li className="list-item Contact animated bounceInLeft">
            <NavLink
              exact
              to={"/contact"}
              className="list-item Contact"
              activeClassName="list-item Contact active"
            >
              Contact
            </NavLink>
          </li>
        </ul>

        <div className="social-container">
          <div className="linkedin">
            <a
              href="https://www.linkedin.com/in/gabbyeaster/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in fa-lg"></i>
            </a>
          </div>
          <div className="github">
            <a
              href="https://github.com/gabeaster"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github fa-lg"></i>
            </a>
          </div>
          <div className="twitter">
            {" "}
            <a
              href="https://twitter.com/devGABBYdev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter fa-lg"></i>
            </a>
          </div>
          <div className="Instagram">
            <a
              href="https://www.instagram.com/gabmonsterrawr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram fa-lg"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
