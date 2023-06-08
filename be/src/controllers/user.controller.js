require('dotenv').config();
const userService = require('../services/user.service');
const { PREFIX_CODE } = require('../constants/variables');
const { newCode } = require('../utils/employee-code.utils');

class UserController {
  /**
   * @notice [POST] /api/v1/admin/add-user
   * @dev API for create new user of system
   * @param {*} req Request from client
   * @param {*} res Response to client
   */
  async index(req, res) {
    try {
      
      const users = await userService.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

module.exports = new UserController();
