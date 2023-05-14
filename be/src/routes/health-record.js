const express = require("express");
const router = express.Router();
const healthRecordController = require("../controllers/health-record.controller");
const { authenticateUser } = require('../middlewares/authentication.middleware');
const { authorizeEmployee } = require('../middlewares/authorization.middleware');

router.get('/', authenticateUser, healthRecordController.index);
router.post('/', authenticateUser, healthRecordController.create);
router.get('/:id', authenticateUser, healthRecordController.show);
router.get('/patient/:patientId', authenticateUser, healthRecordController.patient);
router.get('/patient/:patientId/latest', authenticateUser, healthRecordController.latest);
router.put('/:recordId', authenticateUser, healthRecordController.update);

module.exports = router;
