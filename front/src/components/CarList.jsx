import React, { Component } from "react";
import Car from "./Car";
import { ToastContainer } from "react-toastify";
import CarsRepository from "../services/api/cars";

class CarList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: [],
    };
  }

  componentDidMount() {
    CarsRepository.fetchCars(this);
  }

  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <div className="row mb-2">
          {this.state.cars.length > 0 &&
            this.state.cars.map((car, i) => {
              return <Car carData={car} key={i} />;
            })}
        </div>
      </React.Fragment>
    );
  }
}

export default CarList;
