import React, { Component } from "react";
import axios from "axios";
import API_CONFIG from "./../config/api.config";
import authService from "./../services/auth.service";

export default class Upload extends Component {
  constructor(props) {
    super(props);

    this.state = {
      make: "",
      model: "",
      price: 0,
      picture: null,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleUpload(event) {
    event.preventDefault();

    axios
      .post(
        API_CONFIG.URL + "/cars/create",
        {
          make: this.state.make,
          model: this.state.model,
          price: this.state.price,
          picture: null, // convert image to base64?
        },
        { headers: { "auth-token": authService.getToken() } }
      )
      .then((res) => {
        if (res.data != null) alert(res.data.message);
      })
      .catch((error) => {
        console.log(error);
        if (error != null && error.response != null)
          alert(error.response.data.message);
        else
          alert("Something wrong happend!\nPlease contact technical support.");
      });
  }

  render() {
    return (
      <React.Fragment>
        <form className="form" onSubmit={this.handleUpload}>
          <div className="form-group">
            <label htmlFor="make">Manufacturer</label>
            <input
              className="form-control"
              name="make"
              type="text"
              value={this.state.make}
              onChange={this.handleInputChange}
              required
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="model">Model</label>
            <input
              className="form-control"
              name="model"
              type="text"
              value={this.state.model}
              onChange={this.handleInputChange}
              required
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              className="form-control"
              name="price"
              type="number"
              value={this.state.price}
              onChange={this.handleInputChange}
              required
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="picture">Image</label>
            <input
              className="d-flex"
              name="picture"
              type="file"
              value={this.state.picture}
              onChange={this.handleInputChange}
            ></input>
          </div>
          <button type="submit" className="btn btn-primary">
            Upload
          </button>
        </form>
      </React.Fragment>
    );
  }
}
