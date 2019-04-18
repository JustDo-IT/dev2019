"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ShipSchema = new Schema({
    _id: {
        type: Number,
        required: "SpaceShip must have id"
    },
    lastGate: {
        type: Number
    }
});

module.exports = mongoose.model("SpaceShips", ShipSchema);