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

const authRoutes = require("./routes/auth");
const { authenticate, authorize } = require("./middleware/auth");
const protectedRoutes = require("./routes/protected");

const app = express();
app.use(express.json());
app.use(cors());

//auth testing start
app.use("/auth", authRoutes);
// app.use("/api/protected", protectedRoutes);

//auth testing end

// BaseRoutes
app.use("/usertypes", authenticate, authorize(["admin"]), usertypesRoutes);
app.use("/team", authenticate, authorize(["admin"]), teamRoutes);
app.use("/group", authenticate, authorize(["admin"]), groupRoutes);
app.use(
  "/operationtypes",
  authenticate,
  authorize(["admin"]),
  operationtypesRoutes
);
app.use("/skill", authenticate, authorize(["admin"]), skillRoutes);
app.use("/staff", authenticate, authorize(["admin"]), staffRoutes);
app.use(
  "/businesspartner",
  authenticate,
  authorize(["admin"]),
  businesspartnerRoutes
);
app.use("/site", authenticate, authorize(["admin"]), siteRoutes);
app.use("/vehicle", authenticate, authorize(["admin"]), vehicleRoutes);
app.use(
  "/siteoperation",
  authenticate,
  authorize(["admin"]),
  siteoperationtypeRoutes
);
app.use(
  "/siteoperationstaffvehicle",
  authenticate,
  authorize(["admin"]),
  siteoperationstaffvehicleRoutes
);

app.listen(port, () => {
  console.log("Listening on port " + port);
});
