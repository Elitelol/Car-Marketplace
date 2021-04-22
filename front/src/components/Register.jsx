import React, { Component } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import API_CONFIG from "./../config/api.config";

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      username: "",
      password: "",
      repeatedPassword: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleRegister(event) {
    event.preventDefault();

    axios
      .post(API_CONFIG.URL + "/users/signUp", {
        name: this.state.name,
        username: this.state.username,
        password: this.state.password,
        passwordRepeated: this.state.repeatedPassword,
      })
      .then(() => {
        toast.success(
          "User registered successfully!\nYou can now sign in to this platform."
        );
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
      <div>
        <ToastContainer />
        <form onSubmit={this.handleRegister}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              className="form-control"
              name="username"
              type="text"
              value={this.state.username}
              onChange={this.handleInputChange}
              required
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
            <label htmlFor="password">Password</label>
            <input
              className="form-control"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleInputChange}
              required
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
              required
            ></input>
          </div>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </div>
    );
  }
}
