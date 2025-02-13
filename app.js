const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
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



const app = express();
app.use(bodyParser.json());
app.use(cors());

// BaseRoutes
app.use("/usertypes",usertypesRoutes);
app.use("/team",teamRoutes);
app.use("/group",groupRoutes);
app.use("/operationtypes",operationtypesRoutes);
app.use("/skill",skillRoutes);
app.use("/staff",staffRoutes);
app.use("/businesspartner",businesspartnerRoutes);
app.use("/site",siteRoutes);
app.use("/vehicle",vehicleRoutes);
app.use("/siteoperation",siteoperationtypeRoutes);

app.listen(port,() => {
    console.log("Listening on port " + port);
})