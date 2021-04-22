import React, { Component } from "react";
import Car from "./Car";
import axios from "axios";
import API_CONFIG from "./../config/api.config";
import { ToastContainer, toast } from "react-toastify";
import authHeader from "./../services/authHeader";

export default class CarDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      carId: props.match.params.id,
      data: [],
    };

    this.deleteCar = this.deleteCar.bind(this);
  }

  fetchCar(id) {
    axios
      .get(API_CONFIG.URL + "/cars/" + id, { headers: authHeader() })
      .then((res) => {
        if (res.data != null) {
          this.setState({
            data: res.data,
          });
        }
      })
      .catch((error) => {
        if (error != null && error.response != null)
          toast.error(error.response.data.message);
        else
          toast.error(
            "Something wrong happend!\nPlease contact technical support."
          );
      });
  }

  deleteCar() {
    axios
      .delete(API_CONFIG.URL + "/cars/delete/" + this.state.carId, {
        headers: authHeader(),
      })
      .then((res) => {
        toast.info(res.data.message);
        window.location.assign("/");
      })
      .catch((error) => {
        if (error != null && error.response != null)
          toast.error(error.response.data.message);
        else
          toast.error(
            "Something wrong happend!\nPlease contact technical support."
          );
      });
  }

  componentDidMount() {
    if (this.state.carId) this.fetchCar(this.state.carId);
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
            />
          </div>
        </div>
        <button className="btn btn-danger" onClick={this.deleteCar}>
          Delete
        </button>
      </div>
    );
  }
}
