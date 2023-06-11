import axios from "./axiosClient";

export const getAllEmployee = (params = {}) => {
  return axios.get("/employees", {
    params,
  });
};
