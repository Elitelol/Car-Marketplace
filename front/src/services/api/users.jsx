import axios from "axios";
import { toast } from "react-toastify";
import API_CONFIG from "../../config/api.config";
import authHeader from "../authHeader";
import authService from "../auth.service";

class UsersRepository {
  register(comp) {
    axios
      .post(API_CONFIG.URL + "/users/signUp", {
        name: comp.state.name,
        username: comp.state.username,
        password: comp.state.password,
        passwordRepeated: comp.state.repeatedPassword,
      })
      .then(() => {
        toast.success(
          "User registered successfully!\nYou can now sign in to this platform."
        );
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

  fetchUser(comp) {
    axios
      .get(API_CONFIG.URL + "/users/" + authService.getCurrentUser(), {
        headers: authHeader(),
      })
      .then((res) => res.data[0])
      .then((data) => {
        comp.setState({
          name: data.name,
          username: data.username,
          joined: data.joined.substring(0, 10),
          pictureEncoded: data.picture,
        });
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

  updateUser(comp) {
    axios
      .patch(
        API_CONFIG.URL + "/users/update/" + comp.state.username,
        {
          name: comp.state.name,
          password: comp.state.password,
          passwordRepeated: comp.state.passwordRepeated,
          picture: comp.state.pictureEncoded,
        },
        { headers: authHeader() }
      )
      .then(() => {
        toast.success("User information successfully updated!");
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

  deleteUser() {
    axios
      .delete(
        API_CONFIG.URL + "/users/delete/" + authService.getCurrentUser(),
        {
          headers: authHeader(),
        }
      )
      .then((res) => {
        authService.logout();
        window.location.assign("/");
        toast.success(res.data.message);
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
