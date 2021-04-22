import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import CarsRepository from "../services/api/cars";

export default class CarDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      carId: props.match.params.id,
      data: [],
    };
  }

  componentDidMount() {
    if (this.state.carId) CarsRepository.fetchCar(this);
  }

  render() {
    return (
      <div>
        <ToastContainer />
        <div className="row featurette">
          <div className="col-md-7">
            <table className="table table-hover table-striped">
              <tr>
                <td>Make:</td>
                <td>{this.state.data.make}</td>
              </tr>
              <tr>
                <td>Model:</td>
                <td>{this.state.data.model}</td>
              </tr>
              <tr>
                <td>Year:</td>
                <td>
                  {this.state.data.year
                    ? this.state.data.year.substring(0, 10)
                    : ""}
                </td>
              </tr>
              <tr>
                <td>Price:</td>
                <td>
                  <span className="d-inline-block mb-2 text-success">
                    {this.state.data.price}&nbsp;€
                  </span>
                </td>
              </tr>
              <tr>
                <td>Description:</td>
                <td>{this.state.data.description}</td>
              </tr>
            </table>
          </div>
          <div className="col-md-5">
            <img
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              src={this.state.data.picture}
              alt="Car"
            />
          </div>
        </div>
        <button
          className="btn btn-danger"
          onClick={() => CarsRepository.deleteCar(this)}
        >
          Delete
        </button>
      </div>
    );
  }
}
