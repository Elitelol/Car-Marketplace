import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./../styles/main.scss";

class Navbar extends Component {
  render() {
    return (
      <div class="container">
        <header class="blog-header py-3">
          <div class="row flex-nowrap justify-content-between align-items-center">
            <div class="col-8 text-center">
              <Link className="blog-header-logo text-dark" to="/">
                le Car of ze market of ze place
              </Link>
            </div>
            <div class="col-4 d-flex justify-content-end align-items-center">
              <a class="btn btn-sm btn-outline-secondary" href="/register">
                Sign up
              </a>
            </div>
          </div>
        </header>

        <div class="nav-scroller py-1 mb-2">
          <nav class="nav d-flex justify-content-between">
            <a class="p-2 link-secondary" href="#">
              Many
            </a>
            <a class="p-2 link-secondary" href="#">
              Links
            </a>
            <a class="p-2 link-secondary" href="#">
              Which
            </a>
            <a class="p-2 link-secondary" href="#">
              Won't
            </a>
            <a class="p-2 link-secondary" href="#">
              Be
            </a>
            <a class="p-2 link-secondary" href="#">
              Used
            </a>
            <a class="p-2 link-secondary" href="#">
              Politics
            </a>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navbar;
