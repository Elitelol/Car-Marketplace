import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./../styles/main.scss";
import logo from "./../logo.svg";
import authService from "./../services/auth.service";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
  }

  logout() {
    authService.logout();
    window.location.reload();
  }

  render() {
    return (
      <div className="container">
        <header className="blog-header py-3">
          <div className="row flex-nowrap justify-content-between align-items-center">
            <div className="col-8 text-center">
              <Link className="blog-header-logo text-dark" to="/">
                <img src={logo} width="75px" height="75px" alt="react-logo" />
                <strong>Car marketplace</strong>
              </Link>
            </div>
            <div className="col-4 d-flex justify-content-end align-items-center">
              {authService.isLoggedIn() ? (
                <React.Fragment>
                  <Link
                    className="btn btn-sm btn-outline-secondary mr-1"
                    to="/user"
                  >
                    {authService.getCurrentUser()}
                  </Link>
                  <button
                    className="btn btn-sm btn-outline-primary"
                    onClick={this.logout}
                  >
                    Logout
                  </button>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <Link
                    className="btn btn-sm btn-outline-secondary mr-1"
                    to="/register"
                  >
                    Sign up
                  </Link>
                  <Link className="btn btn-sm btn-outline-primary" to="/login">
                    Sign in
                  </Link>
                </React.Fragment>
              )}
            </div>
          </div>
        </header>

        <div className="nav-scroller py-1 mb-2">
          <nav className="nav d-flex justify-content-between">
          <Link to="/" className="p-2 link-secondary">
                Car list
            </Link>
            <Link to="/upload" className="p-2 link-secondary">
              Upload
            </Link>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navbar;
