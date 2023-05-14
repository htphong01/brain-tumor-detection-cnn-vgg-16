const { User } = require('../models');

class UserService {
  
  createOne(data) {
    return User.create(data);
  }

  findOne(data, options = {}) {
    return User.findOne(data, {}, options);
  }

}

module.exports = new UserService();
