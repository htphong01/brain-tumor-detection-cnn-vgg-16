import axios from "axios";

const URL = `https://api.cloudinary.com/v1_1/htphong02/upload`;
const UPLOAD_PRESET = "q64yqoyh";
const FOLDER = "brain-tumor";

export const uploadImageToCloud = (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", UPLOAD_PRESET);
  formData.append("folder", FOLDER);
  return axios.post(URL, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
