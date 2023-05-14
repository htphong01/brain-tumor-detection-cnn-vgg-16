const { ROLES } = require("../constants/enums");

const authorizeAdmin = (req, res, next) => {
  try {
    const user = req.user;
    if (user.role !== ROLES.ADMIN) {
      res.sendStatus(403);
      return;
    }
    next();
  } catch (error) {
    res.sendStatus(500);
  }
};

const authorizeDoctor = (req, res, next) => {
  try {
    const user = req.user;
    if (user.role !== ROLES.DOCTOR) {
      res.sendStatus(403);
      return;
    }
    next();
  } catch (error) {
    res.sendStatus(500);
  }
};

const authorizeMedicalTechnologist = (req, res, next) => {
  try {
    const user = req.user;
    if (user.role !== ROLES.MEDICAL_TECHNOLOGIST) {
      res.sendStatus(403);
      return;
    }
    next();
  } catch (error) {
    res.sendStatus(500);
  }
};

const authorizeEmployee = (req, res, next) => {
  try {
    const user = req.user;
    if (user.role !== ROLES.EMPLOYEE) {
      res.sendStatus(403);
      return;
    }
    next();
  } catch (error) {
    res.sendStatus(500);
  }
};

module.exports = {
  authorizeAdmin,
  authorizeDoctor,
  authorizeMedicalTechnologist,
  authorizeEmployee
};
