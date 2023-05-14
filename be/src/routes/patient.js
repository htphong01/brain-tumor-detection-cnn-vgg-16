const express = require("express");
const router = express.Router();
const patientController = require("../controllers/patient.controller");
const { authenticateUser } = require('../middlewares/authentication.middleware');
const { authorizeEmployee } = require('../middlewares/authorization.middleware');

router.get('/', authenticateUser, patientController.index);
router.get('/:idCard', authenticateUser, patientController.show);
router.post('/', authenticateUser, patientController.create);
router.put('/:patientId', authenticateUser, patientController.update);

module.exports = router;
