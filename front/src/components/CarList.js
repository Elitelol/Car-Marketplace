import React, { Component } from "react";
import Car from "./Car";

class CarList extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <Car />
          <Car></Car>
        </div>
      </React.Fragment>
    );
  }
}

export default CarList;
