var gates = [];
var fs = require("fs");
module.exports = {
	loadGates: function (){
		return gates;
	}
};

function loadGates(){
	var gatesLines = fs.readFileSync("./gates.txt").toString().split("\n");
	for(i in gatesLines) {
		gates[i] = gatesLines[i].split(" ").map(parseFloat);
	}
	return gates;
}

function showGates(gates){
	for(i in gates){
		for(j in gates[i])
			console.log(gates[i][j]);
		console.log("\n");
	}
}
loadGates();
console.log("Load gates!");
