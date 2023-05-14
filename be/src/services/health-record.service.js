const { HealthRecord } = require('../models');

class HealthRecordService {

  findMany(data) {
    return HealthRecord.find(data).populate('doctor', '-password').populate('patient').populate('testResult');
  }

  findOne(data, options = {}) {
    return HealthRecord.findOne(data, {} , options).populate('doctor', '-password').populate('patient').populate('testResult')
  }

  findById(id) {
    return HealthRecord.findById(id).populate('doctor', '-password').populate('patient').populate('testResult')
  }

  createOne(data) {
    return HealthRecord.create(data);
  }

  updateById(id, data) {
    return HealthRecord.findOneAndUpdate({ _id: id }, data, { new: true });
  }
}

module.exports = new HealthRecordService();