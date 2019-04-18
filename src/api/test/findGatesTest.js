"use strict";
var safeGates = require("../tools/safeGates");
var loadGates = require("../tools/loadGates");


var allGates = loadGates.loadGates();
var maxSum = 0;
for(var i=0;i<allGates.length;i++){
	var sumGates = 0;
	for(var j=0;j<allGates[i].length;j++){
		 sumGates += allGates[i][j];
	}
	maxSum = Math.max(maxSum, sumGates);
}
var falseTestCount = 0, trueTestCount = 0;
for(var i = 1; i < maxSum+2; i++) {
	var resSafeGates = safeGates.findGates(i);
	for(var j = 0; j < resSafeGates.length; j++)
		if(checkSafeGates(resSafeGates[j].gates, i)) trueTestCount++;
		else falseTestCount++;
}


function checkSafeGates(safeGates, destinationGate){
	var sumGates = 0;
	for(var i = 0; i<safeGates.length; i++){
		sumGates += safeGates[i];
	}
	if(sumGates == destinationGate) {
		//console.log("Check pass " + sumGates + " == " + destinationGate);
		return true;
	}
	else{
		console.log("Check failed " + sumGates + " != " + destinationGate);
		return false;
	}
	
}