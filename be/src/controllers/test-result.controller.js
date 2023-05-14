require('dotenv').config();

const testResultService = require('../services/test-result.service');

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
      const testResult = await testResultService.findOne({ _id: req.params.id });
      res.json(testResult);
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
      const uploadResponse = await cloudinary.uploader.upload(fileStr, {folder: "NeuralMed"});
      res.json({ msg: `Uploaded Successfully to ${uploadResponse.url}`, url: uploadResponse.url});
    } catch (err) {
      console.error(err);
      res.status(500).json({ err: err });
    }
  };
}

module.exports = new TestResultController();