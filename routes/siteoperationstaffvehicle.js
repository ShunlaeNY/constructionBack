const express = require("express");
const router = express.Router();
const siteoperationstaffvehicleController = require("../controllers/siteoperationstaffvehicleController");

router.get("/list", siteoperationstaffvehicleController.getAll);
router.get("/getbyid/:id", siteoperationstaffvehicleController.getById);

router.get(
  "/getstaffbysiteoperationtypeid/:id",
  siteoperationstaffvehicleController.getStaffBySiteoperationtypesId
);
router.get(
  "/getvehiclebysiteoperationtypeid/:id",
  siteoperationstaffvehicleController.getVehicleBySiteoperationtypesId
);
router.get(
  "/getbystaffid/:id",
  siteoperationstaffvehicleController.getBystaffId
);
router.get(
  "/getbyvehicleid/:id",
  siteoperationstaffvehicleController.getByvehicleId
);
router.post("/add", siteoperationstaffvehicleController.addNew);
router.post("/addVehicle", siteoperationstaffvehicleController.addNewVehicle);
router.put("/edit/:id", siteoperationstaffvehicleController.editData);
router.delete("/delete/:id", siteoperationstaffvehicleController.deleteData);

module.exports = router;
