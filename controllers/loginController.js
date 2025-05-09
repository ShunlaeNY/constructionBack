const userData = require("../models").Staff;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const {generateAccessToken, generateRefreshToken} = require("../utils/tokengenerator");
const usertypes = require("../models/usertypes");

const login = async (req, res) => {
    const { password, email } = req.body;
    await userData
      .findOne({ where: { email: email}})
      .then((data) => {
        if (data == null) {
          return res.status(400).json({ message: "User not found" });
        }
        let passwordValid = bcrypt.compareSync(password, data.password);
        if (!passwordValid) {
          return res.status(400).json({ message: "Invalid password" });
        }
  
        const accessToken = generateAccessToken(data);
        const refreshToken = generateRefreshToken(data);
  
        userData.update(
          {
            accesstoken: accessToken,
            refreshtoken: refreshToken,
          },
          {
            where: { id: data.id },
          }
        );
  
        return res.status(200).json({
          id: data.id,
          name: data.name,
          email: data.email,
          address: data.address,
          role: data.role,
          accesstoken: accessToken,
          refreshtoken: refreshToken,
        });
      })
      .catch((err) => {
        res.status(500).json(err.message);
      });
  };

  module.exports = {login};
