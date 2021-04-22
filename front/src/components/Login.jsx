import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import UsersRepository from "../services/api/users";

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

    UsersRepository.login(this);
  }

  render() {
    return (
      <div>
        <ToastContainer />
        <form onSubmit={this.handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Email</label>
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
