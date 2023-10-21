import axios from "axios";
import { Buffer } from "buffer";
const baseUrl = "http://144.126.219.21:8001/api/v1/auth/signin";

function parseJwt(token) {
  return JSON.parse(Buffer.from(token.split(".")[1], "base64").toString());
}

async function login(username, password) {
  try {
    const response = await axios.post(baseUrl, {
      email: username,
      password: password,
    });

    if (response.status >= 200 && response.status < 300) {
      const user = response.data.results[0];

      localStorage.setItem("authToken", user.token);
      localStorage.setItem("userRole", parseJwt(user.token).role);

      return user;
    } else {
      console.error("Login failed:", response.status, response.data);
      throw new Error("Login failed");
    }
  } catch (error) {
    console.error("An error occurred:", error.message);
    throw error;
  }
}

export default login;
