"use strict";
module.exports = function (app) {
    var safeGates = require("../controllers/safeGatesController");

    // safeGates Routes
    app.route("/findGates/:ShipId/:destinationId").get(safeGates.findGates);
};
