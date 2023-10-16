import axios from "axios";
const baseUrl = "/api/login";

async function login(username, password) {
  try {
    const response = await axios.post(baseUrl, {
      username: username,
      password: password,
    });

    if (response.status >= 200 && response.status < 300) {
      const user = response.data;

      localStorage.setItem("authToken", user.authToken);
      localStorage.setItem("userRole", user.role);

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
