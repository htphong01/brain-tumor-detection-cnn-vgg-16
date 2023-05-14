const express = require("express");
const router = express.Router();
const testResultController = require("../controllers/test-result.controller");
const { authenticateUser } = require('../middlewares/authentication.middleware');

router.get("/", authenticateUser, testResultController.index);
router.get("/:id", authenticateUser, testResultController.show);
router.post("/upload", authenticateUser, testResultController.upload)
module.exports = router;
