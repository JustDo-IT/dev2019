"use strict";

var mongoose = require("mongoose"),
    SpaceShip = mongoose.model("SpaceShips"),
    SpaceShipRequest = mongoose.model("SpaceShipRequests");

exports.list_all_Ships = function(req, res) {
    SpaceShip.find({}, function(err, task) {
      if (err) res.send(err);
      res.json(task);
    });
};

exports.read_Ship_request_history = function(req, res) {
    SpaceShipRequest.find({spaceShipId:req.params.spaceShipId}, null,
      {sort: {created_at: -1}},
      function(err, task) {
        if(err) res.send(err);
        if(task.length) res.json(task);
        else res.status(404)        // HTTP status 404: NotFound
          .send("Spaceship not found");
      }
  );
};