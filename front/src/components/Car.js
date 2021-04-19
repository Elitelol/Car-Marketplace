import React, { Component } from "react";
import "./../styles/main.scss";

export default class Car extends Component {
  render() {
    return (
      <div className="car">
        <div>
          <h3>Car make</h3>
          <h3>model</h3>
          <div>Description</div>
        </div>
        <div
          style={{
            maxWidth: "100px",
            maxHeight: "100px",
            display: "inline-block",
          }}
        >
          <img src="https://www.focus2move.com/wp-content/uploads/2020/08/Tesla-Roadster-2020-1024-03.jpg"></img>
        </div>
      </div>
    );
  }
}
