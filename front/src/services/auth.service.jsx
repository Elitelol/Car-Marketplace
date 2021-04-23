class AuthService {
  getToken() {
    return localStorage.getItem("auth-token");
  }

  setToken(token) {
    localStorage.setItem("auth-token", token);
  }

  logout(navbar) {
    localStorage.removeItem("auth-token");
  }

  getCurrentUser() {
    const tokenInfo = this.parseJWTToken();
    if (tokenInfo != null) return tokenInfo.username;
    return null;
  }

  isLoggedIn() {
    return this.getToken() != null;
  }

  parseJWTToken() {
    const token = this.getToken();
    if (!token) return;

    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace("-", "+").replace("_", "/");
    return JSON.parse(window.atob(base64));
  }
}

export default new AuthService();
