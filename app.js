const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 8383;

const usertypesRoutes = require("./routes/usertypes");
const teamRoutes = require("./routes/team");
const groupRoutes = require("./routes/group");
const operationtypesRoutes = require("./routes/operationtypes");
const skillRoutes = require("./routes/skill");



const app = express();
app.use(bodyParser.json());
app.use(cors());

// BaseRoutes
app.use("/usertypes",usertypesRoutes);
app.use("/team",teamRoutes);
app.use("/group",groupRoutes);
app.use("/operationtypes",operationtypesRoutes);
app.use("/skill",skillRoutes);

app.listen(port,() => {
    console.log("Listing on port " + port);
})