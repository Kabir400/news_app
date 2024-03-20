import React, { Component } from "react";
import "./Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <div className="bg-light d-none d-lg-block">
        <div className="container">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                FlashNews
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Top-Headings
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                News
              </a>
              <ul className="dropdown-menu">
                <li
                  onClick={() => {
                    this.props.newshandler("business");
                  }}
                >
                  <a className="dropdown-item" href="#">
                    business
                  </a>
                </li>
                <li
                  onClick={() => {
                    this.props.newshandler("entertainment");
                  }}
                >
                  <a className="dropdown-item" href="#">
                    entertainment
                  </a>
                </li>
                <li
                  onClick={() => {
                    this.props.newshandler("general");
                  }}
                >
                  <a className="dropdown-item" href="#">
                    general
                  </a>
                </li>
                <li
                  onClick={() => {
                    this.props.newshandler("health");
                  }}
                >
                  <a className="dropdown-item" href="#">
                    health
                  </a>
                </li>
                <li
                  onClick={() => {
                    this.props.newshandler("science");
                  }}
                >
                  <a className="dropdown-item" href="#">
                    science
                  </a>
                </li>
                <li
                  onClick={() => {
                    this.props.newshandler("sports");
                  }}
                >
                  <a className="dropdown-item" href="#">
                    sports
                  </a>
                </li>
                <li
                  onClick={() => {
                    this.props.newshandler("tecnology");
                  }}
                >
                  <a className="dropdown-item" href="#">
                    tecnology
                  </a>
                </li>
                {/* <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li> */}
              </ul>
            </li>
            <div className="search-box">
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-secondary" type="submit">
                  Search
                </button>
              </form>
            </div>
          </ul>
        </div>
      </div>
    );
  }
}
