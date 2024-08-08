import axios from "axios";

// const api = "https://192.168.121.108:5000/api/users";
const api = "http://127.0.0.1:5000/api";

export const play = async (data) => {
  try {
    const response = await axios.post(`${api}/play`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("play", response);
    return response.data;
  } catch (error) {
    console.error("Error sending data to backend:", error);
  }
};

export const users = async (data) => {
  try {
    const response = await axios.post(`${api}/users`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("users", response);
    return response.data;
  } catch (error) {
    console.error("Error sending data to backend:", error);
  }
};

export const registAddress = async (data) => {
  try {
    const response = await axios.post(`${api}/users/walletAddress`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("users", response);
    return response.data;
  } catch (error) {
    console.error("Error sending data to backend:", error);
  }
};

export const fetchAddress = async (data) => {
  try {
    const response = await axios.get(`${api}/wallet`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    // console.log("users", response);
    return response.data;
  } catch (error) {
    const res = JSON.parse(localStorage.getItem("wallet"));
    console.log(res);
    console.error("Error sending data to backend:", error);

    return res.data;
  }
};

export const saveEarnUrl = async (data) => {
  try {
    const response = await axios.post(`${api}/task/url`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
