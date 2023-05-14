const patientService = require('../services/patient.service');
const { MESSAGES } = require('../constants/variables');

class PatientController {

  async index(req, res) {
    try {
      const patients = await patientService.findMany();
      res.json(patients);
    } catch (error) {
      res.status(500).send();
    }
  }

  /**
   * @notice [POST] /api/v1/patients
   * @dev Only employee can call
   * @param {*} req Request from client
   * @param {*} res Request to client
   */
  async create(req, res) {
    try {
      const isExisted = await patientService.isExisted({
        idCard: req.body.idCard,
      });
      if (isExisted) {
        return res.status(409).send(MESSAGES.PATIENT_EXISTED);
      }

      const newPatient = await patientService.createOne(req.body);
      res.json(newPatient);
    } catch (error) {
      console.log(error);
      res.status(500).send();
    }
  }

  /**
   * @notice [GET] /api/v1/patients/:idCard
   * @param {*} req
   * @param {*} res
   * @returns
   */
  async show(req, res) {
    try {
      const idCard = req.params.idCard;
      const patient = await patientService.findOne({ idCard });
      if (!patient) {
        return res.status(404).send(MESSAGES.PATIENT_NOT_EXIST);
      }
      res.json(patient);
    } catch (error) {}
  }

  /**
   * @notice [PUT] /api/v1/patients/:patientId
   * @param {*} req
   * @param {*} res
   */
  async update(req, res) {
    try {
      const patientId = req.params.patientId;
      const oldPatient = await patientService.findOne({ _id: patientId });
      if (!oldPatient) {
        return res.status(404).send(MESSAGES.PATIENT_NOT_EXIST);
      }
      const info = { ...oldPatient.info, ...req.body.info };
      const newPatient = await patientService.updateById(patientId, {
        ...req.body,
        info,
      });
      res.json(newPatient);
    } catch (error) {
      res.status(500).send();
    }
  }
}

module.exports = new PatientController();
