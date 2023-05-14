const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin.controller");
const { authenticateUser } = require('../middlewares/authentication.middleware');
const { authorizeAdmin } = require('../middlewares/authorization.middleware');

const defaultRoutes = [
  {
    method: 'post',
    path: '/add-user',
    func: adminController.addUser
  }
]

defaultRoutes.forEach(({method, path, func}) => {
  router[method](path, authenticateUser, authorizeAdmin, func);
})


module.exports = router;
