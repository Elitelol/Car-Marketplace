import React, { Component } from "react";

export default class Register extends Component {
  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <label for="email">Email</label>
            <input
              className="form-control"
              id="registration-email"
              type="email"
            ></input>
          </div>
          <div className="form-group">
            <label for="password">Password</label>
            <input
              className="form-control"
              id="registration-password"
              type="password"
            ></input>
          </div>
          <div className="form-group">
            <label for="repeated-password">Confirm password</label>
            <input
              className="form-control"
              id="repeated-password"
              type="password"
            ></input>
          </div>
          <button type="submit" class="btn btn-primary">
            Register
          </button>
        </form>
      </div>
    );
  }
}
