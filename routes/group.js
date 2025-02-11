const express = require('express');
const router = express.Router();
const groupController = require("../controllers/groupController");

router.get('/list', groupController.getAll);
router.get('/getbyid/:id', groupController.getById);
router.post("/add", groupController.addNew);
router.put("/edit/:id", groupController.editData);
router.delete("/delete/:id", groupController.deleteData);

module.exports = router;
