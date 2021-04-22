import React, { Component } from "react";
import Car from "./Car";

class CarList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row mb-2">
          <Car />
          <Car />
          <Car />
        </div>
      </React.Fragment>
    );
  }
}

export default CarList;
