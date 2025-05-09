const userData = require("../models").Staff;
const jwt = require('jsonwebtoken');

const {generateAccessToken,generateRefreshToken} = require("../utils/tokengenerator");

const secretKey = "I am SHUN";

const validateTokens = async (req,res,next) => {
  const accessToken = req.headers["authorization"]?.split(" ")[1];

  if (!accessToken) {
    return res.status(401).json({message: "Access Token is Required"})
  }
  try{
    jwt.verify(accessToken,secretKey);
    next();
  }catch(err){
    if(err.name === "TokenExpiredError"){
      const expireAccessToken = jwt.decode(accessToken);
      await userData
      .findByPk(expireAccessToken.id)
      .then((user) => {
        if(user != null){
          try{
            jwt.verify(user.refreshtoken,secretKey);
            const userInfo = jwt.decode(user.refreshtoken);

            const newAccessToken = generateAccessToken(userInfo);
            const newRefreshToken = generateRefreshToken(userInfo);
            return userData
            .update(
              {
                accesstoken:newAccessToken,
                refreshtoken:newRefreshToken,
              },
              {where:{id:expireAccessToken.id}}
            )
            .then(() => {
              next();
            })
          }catch(err){
            if (err.name === "TokenExpiredError") {
              return res.status(403).json("Refresh Token Expired")
            } else {
              return res.status(500).json("Invalid Refresh Token");
            }
          }
        }else{
          res.status(404).json("No User Found");
        }
      })
      .catch((error) => {
        res.status(500).json({message:"Fail to update Token"});
      });
    }else{
      res.status(400).json("Invalid Token");
    }
  }
}

module.exports = validateTokens;
