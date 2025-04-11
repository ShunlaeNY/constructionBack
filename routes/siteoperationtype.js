const express = require("express");
const router = express.Router();
const siteoperationtypeController = require("../controllers/siteoperationtypeController");

router.get('/list', siteoperationtypeController.getAll);
router.get('/getbyid/:id', siteoperationtypeController.getById);
router.get('/getbyoperationtypeid/:id', siteoperationtypeController.getByOperaiontypeId);
router.get('/getbysiteid/:id', siteoperationtypeController.getBySiteId);
router.post("/add", siteoperationtypeController.addNew);
router.put("/edit/:id", siteoperationtypeController.editData);
router.delete("/delete/:id", siteoperationtypeController.deleteData);

module.exports = router;
