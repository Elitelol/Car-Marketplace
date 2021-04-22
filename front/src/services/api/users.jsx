import axios from "axios";
import { toast } from "react-toastify";
import API_CONFIG from "../../config/api.config";
import authHeader from "../authHeader";
import authService from "../auth.service";

class UsersRepository {
  login(comp) {
    axios
      .post(API_CONFIG.URL + "/users/signIn", {
        username: comp.state.username,
        password: comp.state.password,
      })
      .then((res) => {
        authService.setToken(res.data);
        toast.success("Success!");
        window.location.reload();
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

export default new UsersRepository();
