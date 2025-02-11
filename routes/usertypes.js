const express = require('express');
const router = express.Router();
const usertypesController = require("../controllers/usertypesController");

router.get('/list', usertypesController.getAll);
router.get('/getbyid/:id', usertypesController.getById);

module.exports = router;
