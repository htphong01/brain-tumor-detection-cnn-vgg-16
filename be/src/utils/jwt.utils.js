require("dotenv").config();
const jwt = require("jsonwebtoken");

const generateToken = (data) => {
  try {
    const accessToken = jwt.sign(data, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_TTL,
    });
    
    const refreshToken = jwt.sign(data, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_TTL_REFRESH,
    });
    return { accessToken, refreshToken };
  } catch (error) {
    console.log('error', error);
  }
};

const decodeToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return ;
  }
};

module.exports = {
  generateToken,
  decodeToken,
};
