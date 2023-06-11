import axios from './axiosClient';

export const getAllHealthRecord = (params = {}) => {
  return axios.get('/health-records', {
    params
  });
}

export const addNewHealthRecord = (data) => {
  return axios.post('/health-records', data);
}