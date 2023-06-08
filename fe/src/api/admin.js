import axios from './axiosClient';

export const addUser = (data) => {
  return axios.post('/admin/add-user', data)
}