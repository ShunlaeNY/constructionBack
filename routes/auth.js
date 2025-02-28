const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "secret";
const Staff = require("../models").Staff;

const router = express.Router();

// Define role mapping
const ROLE_MAP = {
  1: "admin",
  2: "staff",
};

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Staff.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ message: "User doesn't exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Convert userTypesId to role name
    const role = ROLE_MAP[user.usertypesId] || "staff";

    const token = jwt.sign({ id: user.id, role }, JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({
      token,
      user: {
        id: user.id,
        email: user.email,
        role,
      },
    });
  } catch (error) {
    console.error("HEE:", error);
    // res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;
