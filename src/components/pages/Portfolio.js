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

          {/* FLYCAST TRIP PLANNER */}
          <a
            href="https://zberkley88.github.io/flycast-trip-planner/"
            target="_blank"
            rel="noreferrer"
            className="col-12 col-md-4"
          >
            <li className="project-card">
              <h3 className="project-title">FlyCast Trip Planner</h3>
              <div className="project-description">
                <p>
                  A web application that retrieves flight and weather
                  information based on a user's search queries.
                </p>
              </div>
              <footer>
                <ul className="skill-list">
                  <li>JavaScript</li>
                  <li>HTML</li>
                  <li>API</li>
                </ul>
              </footer>
            </li>
          </a>
        </div>
      </ul>

      <ul className="container-fluid">
        <div className="row">
          {/* E-COMMERCE BACK END */}
          <a
            href="https://github.com/ZBerkley88/ecommerce-back-end"
            target="_blank"
            rel="noreferrer"
            className="col-12 col-md-4"
          >
            <li className="project-card">
              <h3 className="project-title">E-Commerce Back End</h3>
              <div className="project-description">
                <p>
                  This is a back-end for an e-commerce site which uses
                  Express.js and Sequelize to interact with a MySQL database.
                </p>
              </div>
              <footer>
                <ul className="skill-list">
                  <li>SQL</li>
                  <li>Sequelize</li>
                  <li>Express</li>
                </ul>
              </footer>
            </li>
          </a>

          {/* THE INFOBAHN */}
          <a
            href="https://github.com/ZBerkley88/the-infobahn"
            target="_blank"
            rel="noreferrer"
            className="col-12 col-md-4"
          >
            <li className="project-card">
              <h3 className="project-title">The InfoBahn</h3>
              <div className="project-description">
                <p>
                  The InfoBahn is an API for social media applications. It
                  allows users to store and retrieve users, their thoughts, and
                  their reactions to users' thoughts.
                </p>
              </div>
              <footer>
                <ul className="skill-list">
                  <li>MongoDB</li>
                  <li>JavaScript</li>
                  <li>Express</li>
                </ul>
              </footer>
            </li>
          </a>

          {/* TEAM BUILDING EXERCISE */}
          <a
            href="https://github.com/ZBerkley88/team-building-exercise"
            target="_blank"
            rel="noreferrer"
            className="col-12 col-md-4"
          >
            <li className="project-card">
              <h3 className="project-title">Node Team Builder</h3>
              <div className="project-description">
                <p>
                  {" "}
                  The purpose of this project was to create a Node.js command
                  line application that takes information about employees and
                  generates an HTML webpage the displays their information on
                  individual cards.{" "}
                </p>
              </div>
              <footer>
                <ul className="skill-list">
                  <li>Node</li>
                  <li>HTML</li>
                  <li>JavaScript</li>
                </ul>
              </footer>
            </li>
          </a>
        </div>
      </ul>
    </div>
  );
}
