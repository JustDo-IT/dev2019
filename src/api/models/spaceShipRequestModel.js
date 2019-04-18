"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ShipRequestSchema = new Schema({
    spaceShipId: {
        type: Number,
        required: "SpaceShip must have id"
    },
    requestGate: {
        type: Number
    },
    route: {
        type: Schema.Types.Mixed
    }
}, {timestamps: {createdAt: "created_at"}});

module.exports = mongoose.model("SpaceShipRequests", ShipRequestSchema);