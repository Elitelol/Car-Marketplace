import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./../styles/main.scss";
import logo from "./../logo.svg";

class Navbar extends Component {
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
              <a
                className="btn btn-sm btn-outline-secondary mr-1"
                href="/register"
              >
                Sign up
              </a>
              <a className="btn btn-sm btn-outline-primary" href="/login">
                Sign in
              </a>
            </div>
          </div>
        </header>

        <div className="nav-scroller py-1 mb-2">
          <nav className="nav d-flex justify-content-between">
            <Link to="/upload">
              <button className="btn btn-primary" href="/upload">
                Upload
              </button>
            </Link>
            {/* <a className="p-2 link-secondary" href="#">
              About
            </a> */}
            {/* <a className="p-2 link-secondary" href="#">
              Links
            </a>
            <a className="p-2 link-secondary" href="#">
              Which
            </a>
            <a className="p-2 link-secondary" href="#">
              Won't
            </a>
            <a className="p-2 link-secondary" href="#">
              Be
            </a>
            <a className="p-2 link-secondary" href="#">
              Used
            </a>
            <a className="p-2 link-secondary" href="#">
              Politics
            </a> */}
          </nav>
        </div>
      </div>
    );
  }
}

export default Navbar;
