const express = require('express');
const router = express.Router();
const teamController = require("../controllers/teamController");

router.get('/list', teamController.getAll);
router.get('/getbyid/:id', teamController.getById);
router.post("/add", teamController.addNew);
router.put("/edit/:id", teamController.editData);
router.delete("/delete/:id", teamController.deleteData);

module.exports = router;
