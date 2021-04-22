import React, { Component } from "react";
import axios from "axios";
import API_CONFIG from "./../config/api.config";
import authService from "./../services/auth.service";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleLogin(event) {
    event.preventDefault();

    axios
      .post(API_CONFIG.URL + "/users/signIn", {
        username: this.state.username,
        password: this.state.password,
      })
      .then((res) => {
        authService.setToken(res.data);
        alert("Signed in successfully");
      })
      .catch((error) => {
        if (error != null && error.response != null)
          alert(error.response.data.message);
        else
          alert("Something wrong happend!\nPlease contact technical support.");
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Email</label>
            <input
              className="form-control"
              name="username"
              type="email"
              value={this.state.username}
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
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}
