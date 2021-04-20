import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <label for="email">Email</label>
            <input
              className="form-control"
              id="login-email"
              type="email"
            ></input>
          </div>
          <div className="form-group">
            <label for="password">Password</label>
            <input
              className="form-control"
              id="login-password"
              type="password"
            ></input>
          </div>
          <button type="submit" class="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}
