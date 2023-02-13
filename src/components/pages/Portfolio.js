import React from "react";

export default function Portfolio() {
  return (
    <div className="page">
      <h1 className="page-title">Portfolio</h1>

      <ul className="project-grid">
        <a href="https://libscrib-app.herokuapp.com/" target="_blank" rel="noreferrer">
          <li className="project-card">
            <h3 className="project-title">LibScrib</h3>
            <div className="project-description">
              <p>
                {" "}
                Allows users to search for information about a desired book.
                When the user enters in the title of a book, the application
                searches through the NYTBS Database and finds all pertinent
                information about the book.
              </p>
            </div>
            <footer>
              <ul className="skill-list">
                <li>Handlebars</li>
                <li>Node</li>
                <li>MySQL</li>
              </ul>
            </footer>
          </li>
        </a>
      </ul>
    </div>
  );
}
