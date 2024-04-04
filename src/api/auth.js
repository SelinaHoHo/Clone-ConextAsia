import axios from "axios";

export const postLogin = (data) => {
  return axios.post("/login", data);
};
export const postRegister = (data) => {
  return axios.post("/register", data);
};
