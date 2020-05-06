import React from "react";
import "../../assets/todo-list.PNG";
function Todo() {
  return (
    <>
      <div className="project-card to-do">
        <div className="project-links">
          <a
            className="button"
            href="https://todo-with-react-psi.now.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-eye fa-3x"></i>
          </a>
          <h2>Todo App</h2>
          <a
            className="github-button"
            href="https://github.com/gabeaster/React-Todo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github fa-3x"></i>
          </a>
        </div>
        <div className="proj-img-container">
          <img
            src={require("../../assets/to-do-list.PNG")}
            alt="preview of to-do App"
          />
        </div>

        <div className="project-details">
          <div className="details-container">
            <p>
              For this project, I was provided an empty scaffolded file
              structure. My task was to build out a CRUD To Do single page
              application in React using class components that manage state
              using useState hooks. I have since refactored the original code
              base to utilize Redux for state management.
            </p>
            <ul>
              <li>HTML</li>
              <li>SASS</li>
              <li>REACT</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default Todo;
