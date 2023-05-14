const userService = require('../services/user.service');
const { PREFIX_CODE } = require('../constants/variables');
const { newCode } = require('../utils/employee-code.utils');

class AdminController {
  /**
   * @notice [POST] /api/v1/admin/add-user
   * @dev API for create new user of system
   * @param {*} req Request from client
   * @param {*} res Response to client
   */
  async addUser(req, res) {
    try {
      const latestUser = await userService.findOne(
        {},
        { sort: { createdAt: -1 } }
      );
      let latestCode = '000000';
      if(latestUser) {
        latestCode = latestUser.code.substring(3);
      }
      const newUser = await userService.createOne({
        ...req.body,
        code: PREFIX_CODE + newCode(latestCode)
      });
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

module.exports = new AdminController();
