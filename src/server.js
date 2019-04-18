var express = require("express"),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require("mongoose"),
    safeGates = require("./api/models/safeGatesModel"),
    spaceShips = require("./api/models/spaceShipModel"),
    spaceShipRequests = require("./api/models/spaceShipRequestModel"),
    bodyParser = require("body-parser");

const config = require("./db");
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(config.DB, function(err, db) {
    if(err) {
        console.log("database is not connected")
    }
    else {
        console.log("connected!!")
    }
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var routes = require("./api/routes/safeGatesRoute"); //importing route
routes(app); //register the route
var routes = require("./api/routes/spaceShipRoute"); //importing route
routes(app); //register the route

app.listen(port);

console.log("commandCenter RESTful API server started on: " + port);
