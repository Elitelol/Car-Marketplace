import React, { Component } from "react";

export default class Register extends Component {
  constructor() {
    super();
    this.API_URL = "http://localhost:5000";
  }

  register = () => {
    console.log("called register function");
    fetch(this.API_URL + "/users/signUp")
      .then((res) => res.json())
      .then((data) => console.log("Request data: ", data));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.register}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              className="form-control"
              id="registration-email"
              type="email"
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              className="form-control"
              id="registration-password"
              type="password"
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="repeated-password">Confirm password</label>
            <input
              className="form-control"
              id="repeated-password"
              type="password"
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
