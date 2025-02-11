const express = require('express');
const router = express.Router();
const skillController = require("../controllers/skillController");

router.get('/list', skillController.getAll);
router.get('/getbyid/:id', skillController.getById);

module.exports = router;
