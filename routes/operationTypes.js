const express = require("express");
const router = express.Router();
const operationtypeController = require("../controllers/operationtypesController");

router.get("/list", operationtypeController.getAll);
router.get("/getbyid/:id", operationtypeController.getById);
router.post("/add", operationtypeController.addNew);
router.put("/edit/:id", operationtypeController.editData);
router.delete("/delete/:id", operationtypeController.deleteData);

module.exports = router;
