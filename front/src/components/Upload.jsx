import React, { Component } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import API_CONFIG from "./../config/api.config";
import authHeader from "./../services/authHeader";

export default class Upload extends Component {
  constructor(props) {
    super(props);

    this.state = {
      make: "",
      model: "",
      year: 2000,
      price: 0,
      description: "",
      picture: "",
      pictureEncoded: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleFileChange(event) {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      this.setState({
        picture: file,
        pictureEncoded: reader.result,
      });
    };
  }

  handleSubmit(event) {
    event.preventDefault();

    axios
      .post(
        API_CONFIG.URL + "/cars/create",
        {
          make: this.state.make,
          model: this.state.model,
          year: this.state.year,
          price: this.state.price,
          description: this.state.description,
          picture: this.state.pictureEncoded,
        },
        { headers: authHeader() }
      )
      .then((res) => {
        if (res.data != null) toast.info(res.data.message);
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

  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <form className="form" onSubmit={this.handleSubmit}>
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
            <label htmlFor="year">Manufacture date</label>
            <input
              className="form-control"
              name="year"
              type="date"
              value={this.state.year}
              onChange={this.handleInputChange}
              views={["year"]}
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
            <label htmlFor="description">Description</label>
            <input
              className="form-control"
              name="description"
              type="text"
              value={this.state.description}
              onChange={this.handleInputChange}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="picture">Image</label>
            <input
              className="d-flex"
              name="picture"
              type="file"
              onChange={this.handleFileChange}
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
