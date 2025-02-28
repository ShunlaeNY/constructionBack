const express = require("express");
const { authenticate, authorize } = require("../middleware/auth");
const router = express.Router();

// Admin-only route (only users with 'admin' role can access)
router.get("/admin", authenticate, authorize(["admin"]), (req, res) => {
  res.json({ message: "Welcome, admin!" });
});

router.get("/staff", authenticate, authorize(["staff"]), (req, res) => {
  res.json({ message: "Welcome, staff!" });
});

module.exports = router;
