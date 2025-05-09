const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 8383;

//base tables
const usertypesRoutes = require("./routes/usertypes");
const teamRoutes = require("./routes/team");
const groupRoutes = require("./routes/group");
const skillRoutes = require("./routes/skill");
// ****************************
//master tables
const operationtypesRoutes = require("./routes/operationtypes");
const staffRoutes = require("./routes/staff");
const businesspartnerRoutes = require("./routes/businesspartner");
const siteRoutes = require("./routes/site");
const vehicleRoutes = require("./routes/vehicle");
// ****************************
//joining tables
// ****************************
const siteoperationtypeRoutes = require("./routes/siteoperationtype");
const siteoperationstaffvehicleRoutes = require("./routes/siteoperationstaffvehicle");

// auth
const authRoutes = require("./routes/auth");
const validateTokens = require("./middleware/auth");
const apiKeyValidator = require("./middleware/apikey");

const app = express();
app.use(express.json());
app.use(cors());

//auth testing start
app.use("/auth",apiKeyValidator, authRoutes);

//auth testing end

// BaseRoutes
app.use("/usertypes", validateTokens, usertypesRoutes);
app.use("/team", validateTokens, teamRoutes);
app.use("/group", validateTokens, groupRoutes);
app.use(
  "/operationtypes",
  validateTokens,
  operationtypesRoutes
);
app.use("/skill", validateTokens, skillRoutes);
app.use("/staff", validateTokens, staffRoutes);
app.use(
  "/businesspartner",
  validateTokens,
  businesspartnerRoutes
);
app.use("/site", validateTokens, siteRoutes);
app.use("/vehicle", validateTokens, vehicleRoutes);
app.use(
  "/siteoperation",
  validateTokens,
  siteoperationtypeRoutes
);
app.use(
  "/all",
  validateTokens,
  siteoperationstaffvehicleRoutes
);

app.listen(port, () => {
  console.log("Listening on port " + port);
});
