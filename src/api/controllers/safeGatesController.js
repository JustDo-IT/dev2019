"use strict";
var safeGates = require("../tools/safeGates.js"),
    mongoose = require("mongoose"),
    spaceShip = mongoose.model("SpaceShips"),
    spaceShipRequest = mongoose.model("SpaceShipRequests");


exports.findGates = function(req, res) {
    var resSafeGates = safeGates.findGates(req.params.destinationId);
    res.json(resSafeGates);

    // save infromation about request to DB
    spaceShip.findOneAndUpdate({_id: req.params.ShipId},
        {_id: req.params.ShipId, lastGate: req.params.destinationId},
        {new: true, upsert: true},
        function(err, spaceShip) {
            if(err) res.send(err);
        });
    var request = new spaceShipRequest({spaceShipId: req.params.ShipId,
        requestGate: req.params.destinationId, route:resSafeGates});
    request.save();
};
