import React, { Component } from "react";

export default class Hamburgar extends Component {
  render() {
    return (
      <>
        <nav className="navbar bg-body-tertiary fixed-top d-block d-lg-none ">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              FlashNews
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-end"
              tabIndex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                  FlashNews
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Top-Headlines
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
                    </ul>
                  </li>
                </ul>
                <form className="d-flex mt-3" role="search">
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
            </div>
          </div>
        </nav>
      </>
    );
  }
}
