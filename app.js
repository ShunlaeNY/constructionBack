const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 8383;



const app = express();
app.use(bodyParser.json());
app.use(cors());

// BaseRoutes

app.listen(port,() => {
    console.log("Listing on port " + port);
})