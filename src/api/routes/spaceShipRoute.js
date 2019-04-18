"use strict";
module.exports = function (app) {
    var spaceShip = require("../controllers/spaceShipController");

    // spaceShip Routes
    app.route("/spaceShips").get(spaceShip.list_all_Ships);

    app.route("/spaceShips/:spaceShipId").get(spaceShip.read_Ship_request_history);
};
