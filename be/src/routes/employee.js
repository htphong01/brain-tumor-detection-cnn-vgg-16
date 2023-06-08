const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const { authenticateUser } = require('../middlewares/authentication.middleware');
const { authorizeAdmin } = require('../middlewares/authorization.middleware');

const defaultRoutes = [
  {
    method: 'get',
    path: '/',
    func: userController.index
  }
]

defaultRoutes.forEach(({method, path, func}) => {
  router[method](path, authenticateUser, authorizeAdmin, func);
})


module.exports = router;
