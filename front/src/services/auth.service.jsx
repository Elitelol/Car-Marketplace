class AuthService {
  getToken() {
    return localStorage.getItem("auth-token");
  }

  setToken(token) {
    localStorage.setItem("auth-token", token);
  }

  logout() {
    console.log("logout");
    localStorage.removeItem("auth-token");
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
