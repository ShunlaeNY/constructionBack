const jwt = require('jsonwebtoken');
const secretKey = "I am SHUN";

const generateAccessToken = (userData) => {
    return jwt.sign(
        {id: userData.id,name:userData.name,email:userData.email},
        secretKey,
        {expiresIn: "3m"}
    )
}

const generateRefreshToken = (userData) => {
    return jwt.sign(
      { id: userData.id, name: userData.name, email: userData.email },
      secretKey,
      { expiresIn: "10m" }
    );
  };

module.exports = {
    generateAccessToken,
    generateRefreshToken,
};
  