const { User } = require('../models');

class UserService {
  createOne(data) {
    return User.create(data);
  }

  findOne(data, options = {}) {
    return User.findOne(data, {}, options);
  }

  find(conditions = {}, options = {}) {
    return User.find(conditions, options).sort([['createdAt', '-1']]).select('-password');
  }
}

module.exports = new UserService();
