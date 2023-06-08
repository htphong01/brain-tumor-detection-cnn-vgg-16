import axiosClient from "./axiosClient";

const API_ROUTE = "auth";

export const login = (data) => {
  return axiosClient.post(`/${API_ROUTE}/login`, data);
};
