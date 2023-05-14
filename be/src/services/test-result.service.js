const { TestResult } = require('../models');

class TestResultService {
  
  findAll() {
    return TestResult.find();
  }

  findOne(data) {
    return TestResult.findOne(data);
  }

  createOne(data) {
    return TestResult.create(data);
  }
}

module.exports = new TestResultService();