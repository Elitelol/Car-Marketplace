import axios from "axios";
import React, { Component } from "react";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.API_URL = "http://localhost:3000";

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
      .post(this.API_URL + "/users/signUp", {
        name: this.state.name,
        username: this.state.username,
        password: this.state.password,
        passwordRepeated: this.state.repeatedPassword,
      })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleRegister}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              className="form-control"
              name="username"
              type="email"
              value={this.state.username}
              onChange={this.handleInputChange}
              required={true}
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
              required={true}
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
              required={true}
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
              required={true}
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
