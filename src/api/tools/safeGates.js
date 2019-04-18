var vector = require("node-vector");
var loadGates = require("./loadGates");

module.exports = {
    findGates: function (destinationGate){
        return findSafeGates(destinationGate);
    }
};

function show_sub(sub){
    for(var i=0;i<sub.size();i++)
        console.log(sub.at(i));
}

function recursionSearch(target, elmentsNumber, sequenceSize, seq, sub){
    if (elmentsNumber < 0 || target < 0) return;
    else if (target==0 && sequenceSize !=0) return sub;
    else if (target==0) return;
    else if (target!=0 && elmentsNumber==0) return;
    else for (;sequenceSize < seq.size();){
        val = seq.at(sequenceSize);
        ++sequenceSize;
        sub.push_back(val);
        res=recursionSearch(target - val, elmentsNumber - 1, sequenceSize, seq, sub);
        if(res!=undefined) return res;
        sub.pop_back();
    }
}

function findRoutes(gates, destinationGate){
    var seq = new vector("number", gates);
    var sub = new vector("number");
    res = recursionSearch(destinationGate, gates.length, 0, seq, sub);
    return res;
}

function safeGates(securityLevel, gates, owner){
    this.securityLevel = securityLevel;
    this.gates = gates;
}

function findSafeGates(destinationGate){
    var allGates = loadGates.loadGates();
    var allSafeGates = [];
    for(var i=0;i<allGates.length;i++)
    {
        var res = findRoutes(allGates[i], destinationGate);
        if(res != undefined && res.size()!=0){
            var gates = [];
            for(var j=0;j<res.size();j++) gates[j]=res.at(j);
            allSafeGates.push(new safeGates(i+1, gates));
        }
    }
    return allSafeGates;
}