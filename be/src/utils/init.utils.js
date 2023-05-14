require('dotenv').config();
const userService = require('../services/user.service');
const { ROLES } = require('../constants/enums');
const { DEFAULT_AVATAR } = require('../constants/variables')

const init = async () => {
  try {
    console.log("========= INITIAL ADMIN =========");
    const data = {
      code: process.env.ADMIN_CODE,
      username: process.env.ADMIN_USERNAME,
      password: process.env.ADMIN_PASSWORD,
      role: ROLES.ADMIN,
      avatar: DEFAULT_AVATAR,
      name: 'Administrator'
    }
    console.log('.......... Creating ..........');
    await userService.createOne(data);
    console.log('========= SUCCESSFUL =========');
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = init;