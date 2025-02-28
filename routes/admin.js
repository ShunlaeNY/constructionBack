const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/admin-dashboard", authMiddleware(["admin"]), (req, res) => {
  res.json({ message: "Welcome Admin!" });
});

router.get(
  "/staff-dashboard",
  authMiddleware(["staff", "admin"]),
  (req, res) => {
    res.json({ message: "Welcome Staff!" });
  }
);

module.exports = router;
