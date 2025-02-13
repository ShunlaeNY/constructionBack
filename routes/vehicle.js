const express = require('express');
const router = express.Router();
const vehicleController = require("../controllers/vehicleController");

router.get('/list', vehicleController.getAll);
router.get('/getbyid/:id', vehicleController.getById);
router.get('/getbygroupid/:id', vehicleController.getByGroupId);
router.post("/add", vehicleController.addNew);
router.put("/edit/:id", vehicleController.editData);
router.delete("/delete/:id", vehicleController.deleteData);

module.exports = router;