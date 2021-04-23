export default function authHeader() {
  const token = localStorage.getItem("auth-token");

  if (token) {
    return { "auth-token": token };
  } else {
    return {};
  }
}
