var wheat = 0;
var xp = 0;
var xplvl = 0;
var perk = 0;

var spawnedWheat = 0;

var cutWheat = 1;
var cutWheatMultiplied1PSU = 1;

var cappedWheat = 10;
var cappedWheatMultiplied1WU = 1;
var cappedWheatMultiplied1PU = 1;

var spawnWheat = 1;
var spawnMultiplied1WU = 1;
var spawnMultiplied1PU = 1;

var gainWheat = 3;
var WheatMultiplied1PU = 1;
var WheatMultiplied1WU = 1;

var gainXP = 1;
var XPMultiplied1PU = 1;
var XPMultiplied1WU = 1;

var gainPrestige = 1;

function fungainWheat(number){
    wheat = wheat + gainWheat*WheatMultiplied1PU*WheatMultiplied1WU*cutWheat*cutWheatMultiplied1PSU*prestige;
}

function fungainXP(number){
    xp = xp + gainXP*XPMultiplied1PU*XPMultiplied1WU*cutWheat*cutWheatMultiplied1PSU*prestige;
}

function funGain(){
    if (spawnedWheat >= 1){
        if (spawnedWheat >= cutWheat*cutWheatMultiplied1PSU){
            spawnedWheat = spawnedWheat - cutWheat*cutWheatMultiplied1PSU;
            fungainWheat();
            fungainXP();
        }   
    }
}

function TB1(number){
    xp = xp + number;
    wheat = wheat + number;
}

function gain(){
    funGain();
    update();
}

window.setInterval(function(){
    if (spawnedWheat < 0){
        spawnedWheat = 0
    }

    if (spawnedWheat >= cappedWheat*cappedWheatMultiplied1WU*cappedWheatMultiplied1PU){
        spawnedWheat = cappedWheat*cappedWheatMultiplied1WU*cappedWheatMultiplied1PU
    }

    spawnedWheat = spawnedWheat + spawnWheat*spawnMultiplied1PU*spawnMultiplied1WU/100;
    update();

}, 10) 

window.setInterval(function(){

    xptolvl();
    xptolvl();
    xptolvl();
    xptolvl();
    xptolvl();
    xptolvl();
    xptolvl();
    xptolvl();
    xptolvl();
    xptolvl();
    xptolvl();
    xptolvl();
    xptolvl();
    xptolvl();

}, 10);

function xptolvl(){ 
    var xpCost=  Math.floor(10 * Math.pow(1.1,xplvl));
    if(xp >= xpCost){                                                                  
        xplvl = xplvl + 1; 
        perk = perk + 1;                                                                  
        xp = xp - xpCost, 
        startPrestigeGain(); 
        update();                                                                
    };
    var nextXPCost = Math.floor(10 * Math.pow(1.1,xplvl));       
    document.getElementById('xpCost').innerHTML = nextXPCost;
};

//WHEAT UPGRADES

var wheatWU = 0;
var xpWU = 0;
var capWU = 0;
var spawnWU = 0;

function BuywheatWU(){
    var wheatWUCost= Math.floor(20 * Math.pow(1.2,wheatWU));  
    if(wheat >= wheatWUCost){                                                                  
        wheatWU = wheatWU + 1; 
        WheatMultiplied1WU = WheatMultiplied1WU + 1                                                               
        wheat = wheat - wheatWUCost, 
        maxWheatWU();  
        update();                                                            
    };
    var nextwheatWUCost = Math.floor(20 * Math.pow(1.2,wheatWU));       
    document.getElementById('wheatWUCost').innerHTML = nextwheatWUCost;
};

function BuyxpWU(){
    var xpWUCost= Math.floor(50 * Math.pow(1.4,xpWU));  
    if(wheat >= xpWUCost){                                                                  
        xpWU = xpWU + 1; 
        XPMultiplied1WU = XPMultiplied1WU + 1                                                                  
        wheat = wheat - xpWUCost, 
        maxXPWU();  
        update();                                                            
    };
    var nextxpWUCost = Math.floor(50 * Math.pow(1.4,xpWU));       
    document.getElementById('xpWUCost').innerHTML = nextxpWUCost;
};

function BuycapWU(){
    var capWUCost= Math.floor(100 * Math.pow(1.6,capWU));  
    if(wheat >= capWUCost){                                                                  
        capWU = capWU + 1; 
        cappedWheatMultiplied1WU = cappedWheatMultiplied1WU + 0.20                                                                 
        wheat = wheat - capWUCost, 
        maxcapWU();  
        update();                                                            
    };
    var nextxpWUCost = Math.floor(100 * Math.pow(1.6,capWU));       
    document.getElementById('capWUCost').innerHTML = nextxpWUCost;
};

function BuyspawnWU(){
    var spawnWUCost= Math.floor(250 * Math.pow(1.8,spawnWU)); 
    if(wheat >= spawnWUCost){                                                                  
        spawnWU = spawnWU + 1; 
        spawnMultiplied1WU = spawnMultiplied1WU + 0.20;                                                                 
        wheat = wheat - spawnWUCost, 
        maxspawnWU();
        update();                                                               
    };
    var nextspawnWUCost = Math.floor(250 * Math.pow(1.8,spawnWU));       
    document.getElementById('spawnWUCost').innerHTML = nextspawnWUCost;
};

//PERK UPGRADES

var wheatPerk = 0;
var xpPerk = 0;
var capPerk = 0;
var spawnPerk = 0;

function BuywheatPerk(){
    var wheatPerkCost= 1; 
    if(perk >= wheatPerkCost){                                                                  
        wheatPerk = wheatPerk + 1; 
        WheatMultiplied1PU = WheatMultiplied1PU + 0.25;                                                                 
        perk = perk - wheatPerkCost, 
        maxWheatPerk();
        update();                                                               
    };
    var nextwheatPerkCost = Math.floor(1 * Math.pow(1,wheatPerk));       
    document.getElementById('wheatPerkCost').innerHTML = nextwheatPerkCost;
};

function BuyxpPerk(){
    var xpPerkCost= 1; 
    if(perk >= xpPerkCost){                                                                  
        xpPerk = xpPerk + 1; 
        XPMultiplied1PU = XPMultiplied1PU + 0.25;                                                                 
        perk = perk - xpPerkCost, 
        maxXPPerk();
        update();                                                               
    };
    var nextxpPerkCost = Math.floor(1 * Math.pow(1,xpPerk));       
    document.getElementById('xpPerkCost').innerHTML = nextxpPerkCost;
};

function BuycapPerk(){
    var capPerkCost= Math.floor(1 * Math.pow(1,capPerk));  
    if(perk >= capPerkCost){                                                                  
        capPerk = capPerk + 1; 
        cappedWheatMultiplied1PU = cappedWheatMultiplied1PU + 0.20                                                                 
        perk = perk - capPerkCost, 
        maxcapPerk();  
        update();                                                            
    };
    var nextcapPerkCost = Math.floor(1 * Math.pow(1,capPerk));       
    document.getElementById('capPerkCost').innerHTML = nextcapPerkCost;
};

function BuyspawnPerk(){
    var spawnPerkCost= 1; 
    if(perk >= spawnPerkCost){                                                                  
        spawnPerk = spawnPerk + 1; 
        spawnMultiplied1PU = spawnMultiplied1PU + 0.20;                                                                 
        perk = perk - spawnPerkCost, 
        maxspawnPerk();
        update();                                                               
    };
    var nextspawnPerkCost = Math.floor(1 * Math.pow(1,spawnPerk));       
    document.getElementById('spawnPerkCost').innerHTML = nextspawnPerkCost;
};

//PRESTIGE

var prestige = 1;
var prestigepoint = 0;
var cutPSU = 0;

function Prestige(){
    var prestigeCost= 30; 
    if(xplvl >= prestigeCost){                                                                  
        prestige = prestige + 1;                                                                 
        update();  
        prestigeGain();
        prestigeReset();                                                             
    };
    var nextprestigeCost = Math.floor(30 * Math.pow(1,prestige));       
    document.getElementById('prestigeCost').innerHTML = nextprestigeCost;
};

function BuycutPSU(){
    var cutPSUCost= Math.floor(5 * Math.pow(3,cutPSU));; 
    if(prestigepoint >= cutPSUCost){   
        prestigepoint = prestigepoint - cutPSUCost                                                               
        cutPSU = cutPSU + 1;
        cutWheatMultiplied1PSU = cutWheatMultiplied1PSU + 1;
        maxcutPSU();                                                                
        update();                                                              
    };
    var nextcutPSUCost = Math.floor(5 * Math.pow(3,cutPSU));       
    document.getElementById('cutPSUCost').innerHTML = nextcutPSUCost;
};

function prestigeGain(){
    prestigepoint = prestigepoint + gainPrestige;
}

function prestigeReset(){
    wheat = 0;
    xp =  0;
    xplvl = 0;
    perk = 0;
    WheatMultiplied1PU = 1;
    WheatMultiplied1WU = 1;
    XPMultiplied1PU = 1;
    XPMultiplied1WU = 1;
    spawnMultiplied1PU = 1;
    cappedWheatMultiplied1WU = 1;
    spawnMultiplied1WU = 1;
    cappedWheatMultiplied1PU = 1;
    wheatWU = 0;
    xpWU = 0;
    capWU = 0;
    spawnWU = 0;
    wheatPerk = 0;
    xpPerk = 0;
    spawnPerk = 0;
    capPerk = 0;
    wheatWUCost = 20;
    xpWUCost = 50;
    capWUCost = 100;
    spawnWUCost = 250;
    wheatPerkCost = 1;
    xpPerkCost = 1;
    capPerkCost = 1;
    spawnPerkCost = 1;
    gainPrestige = 1;
    update();
}

//OTHER
function update(){

    document.getElementById('gainWheat').innerHTML = gainWheat; 
    document.getElementById('gainXP').innerHTML = gainXP;  
    document.getElementById('wheat').innerHTML = Round(wheat); 
    document.getElementById('xp').innerHTML = Round(xp);    
    document.getElementById('xplvl').innerHTML = xplvl;

    //document.getElementById('WheatMultiplied1WU').innerHTML = Round(WheatMultiplied1WU);

    //document.getElementById('XPMultiplied1PU').innerHTML = Round(XPMultiplied1PU);

    //document.getElementById('XPMultiplied1WU').innerHTML = Round(XPMultiplied1WU);

    //WHEAT

    document.getElementById('wheatWU').innerHTML = wheatWU;
    document.getElementById('xpWU').innerHTML = xpWU;
    document.getElementById('capWU').innerHTML = capWU;
    document.getElementById('spawnWU').innerHTML = spawnWU;

    //PERK

    document.getElementById('perk').innerHTML = perk;
    document.getElementById('wheatPerk').innerHTML = wheatPerk;
    document.getElementById('xpPerk').innerHTML = xpPerk;
    document.getElementById('capPerk').innerHTML = capPerk;
    document.getElementById('spawnPerk').innerHTML = spawnPerk;

    //PRESTIGE

    document.getElementById('prestigeW').innerHTML = Round(prestige);
    document.getElementById('prestigeX').innerHTML = Round(prestige);
    document.getElementById('prestige').innerHTML = Round(prestige-1);

    document.getElementById('gainPrestige').innerHTML = Round(gainPrestige);
    document.getElementById('prestigepoint').innerHTML = Round(prestigepoint);
    document.getElementById('cutPSU').innerHTML = cutPSU;

    //OTHER 

    document.getElementById('UpgradesWheatTotal').innerHTML = Round(WheatMultiplied1PU*WheatMultiplied1WU);
    document.getElementById('UpgradesXPTotal').innerHTML = Round(XPMultiplied1PU*XPMultiplied1WU);
    document.getElementById('wheatTotal').innerHTML = Round(gainWheat*WheatMultiplied1PU*WheatMultiplied1WU*prestige);
    document.getElementById('xpTotal').innerHTML = Round(gainXP*XPMultiplied1PU*XPMultiplied1WU*prestige);

    document.getElementById('spawnedWheat').innerHTML = Round2(spawnedWheat);
    document.getElementById('cappedWheat').innerHTML = Round(cappedWheat*cappedWheatMultiplied1WU*cappedWheatMultiplied1PU);
    document.getElementById('spawnWheat').innerHTML = Round(spawnWheat*spawnMultiplied1PU*spawnMultiplied1WU);
    document.getElementById('cutWheat').innerHTML = Round(cutWheat*cutWheatMultiplied1PSU);

};

//MAX WHEAT UPGRADES

function maxWheatWU(){
    if (wheatWU >= 100){
       wheatWU = 100;
       wheat = wheat +  1656359490
       WheatMultiplied1WU = WheatMultiplied1WU - 1
    }
};

function maxXPWU(){
    if (xpWU >= 100){
       xpWU = 100;
       wheat = wheat + 20500930444249536
       XPMultiplied1WU = XPMultiplied1WU - 1
    }
};

function maxcapWU(){
    if (capWU >= 50){
       capWU = 50;
       wheat = wheat + 1606938044258
       cappedWheatMultiplied1WU = cappedWheatMultiplied1WU - 0.20
    }
};

function maxspawnWU(){
    if (spawnWU >= 50){
        spawnWU = 50;
        wheat = wheat + 1450658756452387
        spawnMultiplied1WU = spawnMultiplied1WU - 0.20
    }
}
//MAX PERK UPGRADES

function maxWheatPerk(){
    if (wheatPerk >= 50){
       wheatPerk = 50;
       perk = perk + 1
       spawnMultiplied1PU = spawnMultiplied1PU - 0.25
    }
};

function maxXPPerk(){
    if (xpPerk >= 50){
       xpPerk = 50;
       perk = perk + 1
       XPMultiplied1PU = XPMultiplied1PU - 0.25
    }
};

function maxcapPerk(){
    if (capPerk >= 25){
       capPerk = 25;
       perk = perk + 1
       cappedWheatMultiplied1PU = cappedWheatMultiplied1PU - 0.20
    }
};

function maxspawnPerk(){
    if (spawnPerk >= 20){
       spawnPerk = 20;
       perk = perk + 1
       spawnMultiplied1PU = spawnMultiplied1PU - 0.20
    }
};

//MAX PRESTIGE UPGRADES

function maxcutPSU(){
    if (cutPSU >= 6){
       cutPSU = 5;
       prestigepoint = prestigepoint + 1215;
       cutWheatMultiplied1PSU = cutWheatMultiplied1PSU - 1
    }
};

//PRESTIGE GAIN

function startPrestigeGain(){
    if (xplvl >= 30){
        gainPrestige = gainPrestige * 1.1
    }
};

//PREVENT-ROUGE-DECIMALS

function Round(input){
    var output = Math.round(input * 100)/100;
	return output;
}
function Round2(input){
    var output = Math.round(input * 10)/10;
	return output;
}

//PREVENT-INFINITY

//SAVE



/*var save = {
    wheat: wheat,
}

localStorage.setItem("save",JSON.stringify(save));

function saveGame(){
    var savegame = JSON.parse(localStorage.getItem("save"));
    if (typeof savegame.cookies !== "undefined") cookies = savegame.cookies;
}

function removeSave(){
    localStorage.removeItem("save")
}*/
