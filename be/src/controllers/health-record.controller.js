const healthRecordService = require('../services/health-record.service');
const testResultService = require('../services/test-result.service');
const patientService = require('../services/patient.service');
const { MESSAGES } = require('../constants/variables');

class HealthRecordController {
  async index(req, res) {
    try {
      const healthRecords = await healthRecordService.findMany();
      res.json(healthRecords);
    } catch (error) {
      res.status(500).send();
    }
  }

  /**
   * @notice [POST] /api/v1/medicals
   * @param {*} req
   * @param {*} res
   */
  async create(req, res) {
    try {
      const newRecord = await healthRecordService.createOne(req.body);
      res.json(newRecord);
    } catch (error) {
      res.status(500).send();
    }
  }

  /**
   * @notice [GET] /api/v1/medicals/patient/:patientId
   * @param {*} req
   * @param {*} res
   */
  async patient(req, res) {
    try {
      const medicals = await healthRecordService.findMany({
        patient: req.params.patientId,
      });
      res.json(medicals);
    } catch (error) {
      res.status(500).send();
    }
  }

  /**
   * @notice [GET] /api/v1/medicals/patient/:patientId/latest
   * @param {*} req
   * @param {*} res
   */
  async latest(req, res) {
    try {
      const medical = await healthRecordService.findOne(
        {
          patient: req.params.patientId,
        },
        { sort: { createdAt: -1 } }
      );
      res.json(medical);
    } catch (error) {
      res.status(500).send();
    }
  }

  async show(req, res) {
    try {
      const medical = await healthRecordService.findById(req.params.id);
      res.json(medical);
    } catch (error) {
      res.status(500).send();
    }
  }

  /**
   * @notice [PUT] /api/v1/medicals/:recordId
   * @param {*} req
   * @param {*} res
   */
  async update(req, res) {
    try {
      const healthRecord = req.params.healthRecord;
      const oldMedical = await healthRecordService.findOne({ _id: healthRecord });
      if (!oldMedical) {
        return res.status(404).send(MESSAGES.RECORD_NOT_EXIST);
      }

      const testResult = oldMedical.testResult || [];
      if (req.body.testResult) {
        const createdTestResult = await testResultService.createOne({
          healthRecord: oldMedical._id,
          ...req.body.testResult,
        });

        testResult.push(createdTestResult._id);
      }

      const info = { ...oldMedical.info, ...req.body.info };
      const newRecord = await healthRecordService.updateById(recordId, {
        ...req.body,
        info,
        testResult,
      });
      res.json(newRecord);
    } catch (error) {
      console.log(error);
      res.status(500).send();
    }
  }
}

module.exports = new HealthRecordController();
