import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./css/footer.css";

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <footer className="py-5">
          <div className="row justify-content-between">
            <div className="col">
              <h4 className="h4 text-white">Section</h4>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link to="#" className="nav-link p-0 text-light">
                    Home
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="#" className="nav-link p-0 text-light">
                    Features
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="#" className="nav-link p-0 text-light">
                    Pricing
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="#" className="nav-link p-0 text-light">
                    FAQs
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="#" className="nav-link p-0 text-light">
                    About
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col offset-1 text-light">
              <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of whats new and exciting from us.</p>
                <div className="d-flex w-100 gap-2">
                  <label htmlFor="newsletter1" className="visually-hidden">
                    Email address
                  </label>
                  <input
                    id="newsletter1"
                    type="text"
                    className="form-control"
                    placeholder="Email address"
                  />
                  <button className="btn btn-outline-light" type="button">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="d-flex justify-content-between py-4 my-4 border-top">
            <p className="text-light">
              &copy; 2021 Company, Inc. All rights reserved.
            </p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3">
                <a
                  className="link-light"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/egyptianupa/"
                >
                  <FontAwesomeIcon
                    icon={["fab", "instagram"]}
                    className="footer-icon"
                  />
                </a>
              </li>
              <li className="ms-3">
                <a
                  className="link-light"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/EgyptianUPA/"
                >
                  <FontAwesomeIcon
                    icon={["fab", "facebook"]}
                    className="footer-icon"
                  />
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    );
  }
}
