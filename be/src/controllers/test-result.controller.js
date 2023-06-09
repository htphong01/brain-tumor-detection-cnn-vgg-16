require('dotenv').config();

const testResultService = require('../services/test-result.service');
const healthRecordService = require('../services/health-record.service');

class TestResultController {
  async index(req, res) {
    try {
      const testResults = await testResultService.findAll();
      res.json(testResults);
    } catch (error) {
      res.status(500).send();
    }
  }

  async show(req, res) {
    try {
      const testResult = await testResultService.findOne({
        _id: req.params.id,
      });
      res.json(testResult);
    } catch (error) {
      res.status(500).send();
    }
  }

  async create(req, res) {
    try {
      const healthRecord = await healthRecordService.findOne({
        _id: req.body.healthRecord,
      });
      if (!healthRecord) {
        return res.status(404).send(MESSAGES.RECORD_NOT_EXIST);
      }

      const newTestResult = await testResultService.createOne(req.body);
      await healthRecordService.updateById(req.body.healthRecord, {
        testResult: [newTestResult._id],
      });
      res.json(healthRecord);
    } catch (error) {
      res.status(500).send();
    }
  }

  /**
   * @notice [POST] /api/v1/upload
   * @param {*} req
   * @param {*} res
   */
  async upload(req, res) {
    try {
      const fileStr = req.body.data;
      const uploadResponse = await cloudinary.uploader.upload(fileStr, {
        folder: 'NeuralMed',
      });
      res.json({
        msg: `Uploaded Successfully to ${uploadResponse.url}`,
        url: uploadResponse.url,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ err: err });
    }
  }
}

module.exports = new TestResultController();
