const express = require('express');
const router = express.Router();
const staffController = require("../controllers/staffController");

router.get('/list', staffController.getAll);
router.get('/getbyid/:id', staffController.getById);
router.get('/getbyusertypesid/:id', staffController.getByUsertypesId);
router.get('/getbyteamid/:id', staffController.getByTeamId);
router.post("/add", staffController.addNew);
router.put("/edit/:id", staffController.editData);
router.delete("/delete/:id", staffController.deleteData);

module.exports = router;
