import axios from './axiosClient';

export const getAllTestResult = (params = {}) => {
  return axios.get('/test-results', {
    params
  });
}

export const addNewTestResult = (data) => {
  return axios.post('/test-results', data);
}