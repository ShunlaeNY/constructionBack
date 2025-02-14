const express = require('express');
const router = express.Router();
const siteoperationstaffvehicleController = require("../controllers/siteoperationstaffvehicleController");

router.get('/list', siteoperationstaffvehicleController.getAll);
router.get('/getbyid/:id', siteoperationstaffvehicleController.getById);
router.get('/getbysiteoperationtypeid/:id', siteoperationstaffvehicleController.getBySiteoperationtypesId);
router.get('/getbystaffid/:id', siteoperationstaffvehicleController.getBystaffId);
router.get('/getbyvehicleid/:id', siteoperationstaffvehicleController.getByvehicleId);
router.post("/add", siteoperationstaffvehicleController.addNew);
router.put("/edit/:id", siteoperationstaffvehicleController.editData);
router.delete("/delete/:id", siteoperationstaffvehicleController.deleteData);

module.exports = router;
