import axios from "axios";
const baseUrl = "http://localhost:8001/api/v1/payment";
const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiU1RBRkYiLCJzdWIiOiJzaGFiaW5hLnN0YWZmQGdtYWlsLmNvbSIsImlhdCI6MTY5NzQ2NTE5OSwiZXhwIjoxNjk3NDY4Nzk5fQ.ACK6oRpm2DOnWUmJaVvFKaJDR-EcXDvghD14uZ0fFXo";
// const token = localStorage.getItem("authToken");

async function getAllOfMyPayment() {
  try {
    const response = await axios.get(`${baseUrl}/by-me`, {
      Authorization: `Bearer ${token}`,
    });

    if (response.status >= 200 && response.status < 300) {
      const payments = response.data.data;
      return payments;
    } else {
      console.error(
        "getAllOfMyPayment failed:",
        response.status,
        response.data,
      );
      throw new Error("getAllOfMyPayment failed");
    }
  } catch (error) {
    console.error("An error occurred:", error.message);
    throw error;
  }
}

async function getAllPayment() {
  try {
    const response = await axios.get(`${baseUrl}`, {
      Authorization: `Bearer ${token}`,
    });

    if (response.status >= 200 && response.status < 300) {
      const payments = response.data.data;
      return payments;
    } else {
      console.error("getAllPayment failed:", response.status, response.data);
      throw new Error("getAllPayment failed");
    }
  } catch (error) {
    console.error("An error occurred:", error.message);
    throw error;
  }
}

export { getAllOfMyPayment, getAllPayment };
