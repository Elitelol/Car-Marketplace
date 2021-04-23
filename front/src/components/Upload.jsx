import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import CarsRepository from "../services/api/cars";

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
      carId: props.match.params.id,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (this.state.carId != null) CarsRepository.fetchCarForUpdate(this);
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

    if (this.state.carId != null) {
      CarsRepository.updateCar(this);
    } else CarsRepository.createCar(this);
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
            <label className="d-flex flex-row" htmlFor="picture">
              Image
            </label>
            {this.state.pictureEncoded ? (
              <img
                src={this.state.pictureEncoded}
                className="flex-row bd-placeholder-img img-object-fit-cover"
                width="200"
                height="250"
                alt="User"
              />
            ) : (
              ""
            )}
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
