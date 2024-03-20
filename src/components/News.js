import React, { Component } from "react";

export default class News extends Component {
  render() {
    let { title, description } = this.props;
    return (
      <div className="col-lg-3">
        <div className="card">
          <span
            className="position-absolute top-0  translate-middle badge rounded-pill bg-secondary"
            style={{ left: "84%", zIndex: "1" }}
          >
            {this.props.source}
          </span>
          <img
            src={this.props.imgurl}
            className="card-img-top img-fluid"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={this.props.url} className="btn btn-dark btn-sm">
              Read More
            </a>
            <p className="card-text mt-1">
              <small className="text-body-secondary">
                {new Date(this.props.time).toGMTString()}
              </small>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
