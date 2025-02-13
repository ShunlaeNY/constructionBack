const express = require('express');
const router = express.Router();
const businesspartnerController = require("../controllers/businesspartnerController");

router.get('/list', businesspartnerController.getAll);
router.get('/getbyid/:id', businesspartnerController.getById);
router.get('/getbystaffid/:id', businesspartnerController.getByStaffId);
router.post("/add", businesspartnerController.addNew);
router.put("/edit/:id", businesspartnerController.editData);
router.delete("/delete/:id", businesspartnerController.deleteData);

module.exports = router;
