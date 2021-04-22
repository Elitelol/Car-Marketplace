import axios from "axios";
import { toast } from "react-toastify";
import API_CONFIG from "../../config/api.config";
import authHeader from "../authHeader";

class CarsRepository {
  fetchCars(comp) {
    axios
      .get(API_CONFIG.URL + "/cars", { headers: authHeader() })
      .then((res) => {
        if (res.data != null) {
          comp.setState({
            cars: res.data,
          });
        }
      })
      .catch((error) => {
        if (error != null && error.response != null)
          toast.error(error.response.data.message);
        else
          toast.error(
            "Something wrong happend!\nPlease contact technical support."
          );
      });
  }

  fetchCar(comp) {
    axios
      .get(API_CONFIG.URL + "/cars/" + comp.state.carId, {
        headers: authHeader(),
      })
      .then((res) => {
        if (res.data != null) {
          comp.setState({
            data: res.data,
          });
        }
      })
      .catch((error) => {
        if (error != null && error.response != null)
          toast.error(error.response.data.message);
        else
          toast.error(
            "Something wrong happend!\nPlease contact technical support."
          );
      });
  }

  createCar(comp) {
    axios
      .put(
        API_CONFIG.URL + "/cars/create",
        {
          make: comp.state.make,
          model: comp.state.model,
          year: comp.state.year,
          price: comp.state.price,
          description: comp.state.description,
          picture: comp.state.pictureEncoded,
        },
        { headers: authHeader() }
      )
      .then((res) => {
        if (res.data != null) toast.info(res.data.message);
        window.location.assign("/");
      })
      .catch((error) => {
        if (error != null && error.response != null)
          toast.error(error.response.data.message);
        else
          toast.error(
            "Something wrong happend!\nPlease contact technical support."
          );
      });
  }

  deleteCar(comp) {
    axios
      .delete(API_CONFIG.URL + "/cars/delete/" + comp.state.carId, {
        headers: authHeader(),
      })
      .then((res) => {
        toast.info(res.data.message);
        window.location.assign("/");
      })
      .catch((error) => {
        if (error != null && error.response != null)
          toast.error(error.response.data.message);
        else
          toast.error(
            "Something wrong happend!\nPlease contact technical support."
          );
      });
  }
}

export default new CarsRepository();
