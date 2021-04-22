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
      .get(API_CONFIG.URL + "/cars/" + comp.state.carId, { headers: authHeader() })
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
}

export default new CarsRepository();
