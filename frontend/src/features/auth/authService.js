import axios from "axios";

const API_URL = "/api/users/";

//registering a user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

//logout an user
const logout = () => {
  localStorage.removeItem("user");
};

//login an user
const login = async (userData) => {
    const response = await axios.post(API_URL + 'login', userData);

    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
  
    return response.data;
}

const authService = {
  register,
  login,
  logout
};

export default authService;
