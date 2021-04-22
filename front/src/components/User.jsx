import React, { Component } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import API_CONFIG from "./../config/api.config";
import authService from "./../services/auth.service";
import authHeader from "./../services/authHeader";

export default class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      username: "",
      password: "",
      repeatedPassword: "",
      joined: "",
      picture: "",
      pictureEncoded: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleUserUpdate = this.handleUserUpdate.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);

    this.getUserInfo();
  }

  getUserInfo() {
    axios
      .get(API_CONFIG.URL + "/users/" + authService.getCurrentUser(), {
        headers: authHeader(),
      })
      .then((res) => res.data[0])
      .then((data) => {
        this.setState({
          name: data.name,
          username: data.username,
          joined: data.joined.substring(0, 10),
        });
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

  handleUserUpdate(event) {
    event.preventDefault();

    axios
      .patch(
        API_CONFIG.URL + "/users/update/" + this.state.username,
        {
          name: this.state.name,
          password: this.state.password,
          repeatedPassword: this.state.repeatedPassword,
          picture: this.state.pictureEncoded,
        },
        { headers: authHeader() }
      )
      .then(() => {
        toast.success("User information successfully updated!");
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
        <form onSubmit={this.handleUserUpdate}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              className="form-control"
              name="username"
              type="email"
              value={this.state.username}
              disabled
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              className="form-control"
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleInputChange}
              required
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="joined">Join date</label>
            <input
              className="form-control"
              name="joined"
              value={this.state.joined}
              disabled
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              className="form-control"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="repeated-password">Confirm password</label>
            <input
              className="form-control"
              name="repeatedPassword"
              type="password"
              value={this.state.repeatedPassword}
              onChange={this.handleInputChange}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="picture">Profile picture</label>
            <input
              className="d-flex"
              name="picture"
              type="file"
              onChange={this.handleFileChange}
            ></input>
          </div>
          <button className="btn btn-primary" type="submit">
            Update
          </button>
        </form>
      </React.Fragment>
    );
  }
}
