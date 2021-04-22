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
            <span className="d-inline-block mb-2 text-success">
              {this.state.data.price}&nbsp;€
            </span>
            <h3 className="mb-0">
              {this.state.data.make} {this.state.data.model}
            </h3>
            <div className="mb-1 text-muted">
              {this.state.data.year
                ? this.state.data.year.substring(0, 10)
                : ""}
            </div>
            <p className="card-text mb-auto">{this.state.data.description}</p>
            <Link
              to={"/details/" + this.state.data._id}
              className="stretched-link"
            >
              Show more
            </Link>
          </div>
          <div className="col-auto d-none d-lg-block">
            <img
              className="bd-placeholder-img img-object-fit-cover"
              width="200"
              height="250"
              src={this.state.data.picture}
              alt="Car"
            />
          </div>
        </div>
      </div>
    );
  }
}
