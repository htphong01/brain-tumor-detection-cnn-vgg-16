import axios from './axiosClient';

export const getAllEmployee = () => {
  return axios.get('/employees')
}
