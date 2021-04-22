import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

class AuthService {
  getToken() {
    return localStorage.getItem("auth-token");
  }
  
  setToken(token) {
    localStorage.setItem("auth-token", token);
  }

  login(username, password) {
    return axios
      .post(API_URL + "signin", {
        username,
        password,
      })
      .then((res) => {
        if (res.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(res.data));
        }
        return res.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password,
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
