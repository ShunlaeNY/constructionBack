// const express = require("express");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const JWT_SECRET = "secret";
// const Staff = require("../models").Staff;

// const router = express.Router();

// // Define role mapping
// const ROLE_MAP = {
//   1: "admin",
//   2: "staff",
// };

// router.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await Staff.findOne({ where: { email } });

//     if (!user) {
//       return res.status(401).json({ message: "User doesn't exist" });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(401).json({ message: "Invalid password" });
//     }

//     // Convert userTypesId to role name
//     const role = ROLE_MAP[user.usertypesId] || "staff";

//     const token = jwt.sign({ id: user.id, role }, JWT_SECRET, {
//       expiresIn: "1h",
//     });

//     res.json({
//       token,
//       user: {
//         id: user.id,
//         email: user.email,
//         role,
//       },
//     });
//   } catch (error) {
//     console.error("HEE:", error);
//     // res.status(500).json({ message: "Server error", error: error.message });
//   }
// });

// module.exports = router;
const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const router = express.Router();

const Staff = require("../models").Staff;
const JWT_SECRET = "secret";
const REFRESH_SECRET = "refresh_secret";

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

    const role = user.usertypesId === 1 ? "admin" : "staff";

    const accessToken = jwt.sign({ id: user.id, role }, JWT_SECRET, {
      expiresIn: "15m",
    });

    const refreshToken = jwt.sign({ id: user.id }, REFRESH_SECRET, {
      expiresIn: "7d",
    });

    res.json({
      accessToken,
      refreshToken,
      user: {
        id: user.id,
        email: user.email,
        role,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});
router.post("/refresh-token", (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return res.status(400).json({ message: "Refresh token is required" });
  }

  try {
    const decoded = jwt.verify(refreshToken, REFRESH_SECRET);

    // Generate new access token
    const accessToken = jwt.sign(
      { id: decoded.id, role: decoded.role },
      JWT_SECRET,
      { expiresIn: "1h" }
    );
    const newRefreshToken = jwt.sign(
      { id: decoded.id, role: decoded.role },
      REFRESH_SECRET,
      { expiresIn: "7d" }
    );

    res.json({ accessToken, refreshToken: newRefreshToken });
  } catch (error) {
    res.status(401).json({ message: "Invalid or expired refresh token" });
  }
});

module.exports = router;
