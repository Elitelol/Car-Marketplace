import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./../styles/main.scss";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <Link to="/">
          <h3>Car marketplace</h3>
        </Link>
        <Link to="/upload">
          <h4>Upload</h4>
        </Link>
      </nav>
    );
  }
}

export default Navbar;
