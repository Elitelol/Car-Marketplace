import React, { Component } from "react";

export default class Upload extends Component {
  render() {
    return (
      <React.Fragment>
        <form className="form">
          <div className="form-group">
            <label for="upload-car-manufacturer">Manufacturer</label>
            <input
              className="form-control"
              id="upload-car-manufacturer"
              type="text"
            ></input>
          </div>
          <div className="form-group">
            <label for="upload-car-model">Model</label>
            <input
              className="form-control"
              id="upload-car-model"
              type="text"
            ></input>
          </div>
          <div className="form-group">
            <label for="upload-car-year">Year</label>
            <input
              className="form-control"
              id="upload-car-year"
              type="text"
            ></input>
          </div>
          <div className="form-group">
            <label for="upload-car-image">Image</label>
            <input className="d-flex" id="upload-car-image" type="file"></input>
          </div>
          <button type="submit" className="btn btn-primary">
            Upload
          </button>
        </form>
      </React.Fragment>
    );
  }
}
