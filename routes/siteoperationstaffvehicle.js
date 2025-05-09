const express = require("express");
const router = express.Router();
const siteoperationstaffvehicleController = require("../controllers/siteoperationstaffvehicleController");

router.get("/list", siteoperationstaffvehicleController.getAll);
router.get("/getbyid/:id", siteoperationstaffvehicleController.getById);
router.get("/getbysiteoperationid/:id",siteoperationstaffvehicleController.getBySiteOperaiontypeId);
router.get("/getbystaffid/:id",siteoperationstaffvehicleController.getByStaffId);
router.get("/getbyvehicleid/:id",siteoperationstaffvehicleController.getByVehicleId);
router.post("/add", siteoperationstaffvehicleController.addNew);
// router.post("/bulk-details", siteoperationstaffvehicleController.getAllDetailsForOperations);
router.put("/edit/:id", siteoperationstaffvehicleController.editData);
router.delete("/delete/:id", siteoperationstaffvehicleController.deleteData);

module.exports = router;
