const express = require('express');
const router = express.Router();
const siteController = require("../controllers/siteController");

router.get('/list', siteController.getAll);
router.get('/getbyid/:id', siteController.getById);
router.get('/getbybusinesspartnerid/:id', siteController.getByBusinesspartnerId);
router.get('/getbystaffid/:id', siteController.getByStaffId);
router.post("/add", siteController.addNew);
router.put("/edit/:id", siteController.editData);
router.delete("/delete/:id", siteController.deleteData);

module.exports = router;
