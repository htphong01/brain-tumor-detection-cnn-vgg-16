const { Patient } = require('../models');

class PatientService {

  findMany(conditions = {}, options = {}) {
    return Patient.find(conditions, options).sort([['createdAt', '-1']]);
  }

  isExisted(data) {
    return Patient.exists(data);
  }

  findOne(data) {
    return Patient.findOne(data);
  }

  createOne(data) {
    return Patient.create(data);
  }

  updateById(id, data) {
    return Patient.findOneAndUpdate({ _id: id }, data, { new: true });
  }

}

module.exports = new PatientService();