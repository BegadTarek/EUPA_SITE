import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./css/navbar.css";

export default class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <div className="navbar-brand logoOverflow">
              <Link to="/">
                <img
                  className="navLogo"
                  src="./assets/img/EUPA_logo_clear.png"
                  alt="EUPA Logo"
                />
              </Link>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    <FontAwesomeIcon icon="home" className="mx-1" />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/ultimate-in-egypt">
                    Ultimate in Egypt
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/play">
                    How to play
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/join">
                    How to join
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact-us">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}
