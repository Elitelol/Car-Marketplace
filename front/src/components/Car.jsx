import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./../styles/main.scss";

export default class Car extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.carData,
    };
  }

  render() {
    return (
      <div className="col-md-6">
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-primary">{this.state.data.make}</strong>
            <h3 className="mb-0">{this.state.data.model}</h3>
            <div className="mb-1 text-muted">{this.state.data.posted}</div>
            <p className="card-text mb-auto">Ka tiek nuo trala</p>
            <Link to="/details" className="stretched-link">
              Show more
            </Link>
          </div>
          <div className="col-auto d-none d-lg-block">
            <svg
              className="bd-placeholder-img"
              width="200"
              height="250"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: Thumbnail"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#55595c"></rect>
              <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                Thumbnail
              </text>
            </svg>
          </div>
        </div>
      </div>
    );
  }
}
