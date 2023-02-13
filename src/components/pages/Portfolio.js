import React from "react";

export default function Portfolio() {
  return (
    <div className="page">
      <h1 className="page-title">Portfolio</h1>

      {/* LIBSCRIB */}
      <ul className="container-fluid">
        <div className="row">
          <a
            href="https://libscrib-app.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
            className="col-12 col-md-4"
          >
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

          {/* EXPRESS NOTE TAKER */}
          <a
            href="https://rocky-lowlands-48543.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
            className="col-12 col-md-4"
          >
            <li className="project-card">
              <h3 className="project-title">Express Note Taker</h3>
              <div className="project-description">
                <p>
                  {" "}
                  This app uses Express.js to save and retrieve data stored in a
                  JSON file. Users can view previously stored notes by clicking
                  on the note title in the sidebar. Users can also delete a note
                  by clicking on the red trash icon beside it.
                </p>
              </div>
              <footer>
                <ul className="skill-list">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                </ul>
              </footer>
            </li>
          </a>

          {/* PLACEHOLDER */}
          <a
            href="google.com"
            target="_blank"
            rel="noreferrer"
            className="col-12 col-md-4"
          >
            <li className="project-card">
              <h3 className="project-title">Placeholder</h3>
              <div className="project-description">
                <p>
                  {" "}
                  Placeholder text
                </p>
              </div>
              <footer>
                <ul className="skill-list">
                  <li>skillOne</li>
                  <li>skillTwo</li>
                  <li>skillThree</li>
                </ul>
              </footer>
            </li>
          </a>


        </div>

        
      </ul>

      <ul className="container-fluid">
        <div className="row">
          {/* PLACEHOLDER */}
          <a
            href="google.com"
            target="_blank"
            rel="noreferrer"
            className="col-12 col-md-4"
          >
            <li className="project-card">
              <h3 className="project-title">Placeholder</h3>
              <div className="project-description">
                <p>
                  {" "}
                  Placeholder text
                </p>
              </div>
              <footer>
                <ul className="skill-list">
                  <li>skillOne</li>
                  <li>skillTwo</li>
                  <li>skillThree</li>
                </ul>
              </footer>
            </li>
          </a>

          {/* PLACEHOLDER */}
          <a
            href="google.com"
            target="_blank"
            rel="noreferrer"
            className="col-12 col-md-4"
          >
            <li className="project-card">
              <h3 className="project-title">Placeholder</h3>
              <div className="project-description">
                <p>
                  {" "}
                  Placeholder text
                </p>
              </div>
              <footer>
                <ul className="skill-list">
                  <li>skillOne</li>
                  <li>skillTwo</li>
                  <li>skillThree</li>
                </ul>
              </footer>
            </li>
          </a>

          {/* PLACEHOLDER */}
          <a
            href="google.com"
            target="_blank"
            rel="noreferrer"
            className="col-12 col-md-4"
          >
            <li className="project-card">
              <h3 className="project-title">Placeholder</h3>
              <div className="project-description">
                <p>
                  {" "}
                  Placeholder text
                </p>
              </div>
              <footer>
                <ul className="skill-list">
                  <li>skillOne</li>
                  <li>skillTwo</li>
                  <li>skillThree</li>
                </ul>
              </footer>
            </li>
          </a>


        </div>

        
      </ul>

    </div>
  );
}
