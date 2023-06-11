import axios from 'axios';
const URL = 'http://localhost:5000/predict';

export const getVggOutput = (file) => {
  const formData = new FormData();
  formData.append('image', file);
  return axios.post(URL, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}