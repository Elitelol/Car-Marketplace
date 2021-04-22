import React, { Component } from "react";
import Car from "./Car";
import axios from "axios";
import API_CONFIG from "./../config/api.config";
import { ToastContainer, toast } from 'react-toastify';
import authHeader from "./../services/authHeader";

class CarList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: [],
    };

    this.fetchCars = this.fetchCars.bind(this);
  }

  fetchCars(event) {
    axios.get(
      API_CONFIG.URL + "/cars",
      {headers: authHeader()}
      )
      .then((res) => {
        if (res.data != null) {
          this.setState({
            cars: res.data,
          });

          console.log(res.data);
        }
      })
      .catch((error) => {
        if (error != null && error.response != null)
          toast.error(error.response.data.message);
        else
          toast.error("Something wrong happend!\nPlease contact technical support.");
      });
  }

  componentDidMount() {
    this.fetchCars();
  }

  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <div className="row mb-2">
        {this.state.cars.length > 0 && this.state.cars.map((car, i) => {       
           return (<Car carData={car} key={i} />) 
        })}
        </div>
      </React.Fragment>
    );
  }
}

export default CarList;
