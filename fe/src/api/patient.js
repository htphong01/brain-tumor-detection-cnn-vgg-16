import axios from './axiosClient';

export const getAllPatient = (params = {}) => {
  return axios.get('/patients', {
    params
  });
}

export const addNewPatient = (data) => {
  return axios.post('/patients', data);
}