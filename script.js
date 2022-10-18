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
var WheatMultiplied1PSU = 1;
var WheatMultiplied1A = 1;


var gainXP = 1;
var XPMultiplied1PU = 1;
var XPMultiplied1WU = 1;
var XPMultiplied1PSU = 1;
var XPMultiplied1A = 1;


var gainPrestige = 10;
var PPMultiplied1A = 1;

function fungainWheat(number){
    wheat = wheat + gainWheat*WheatMultiplied1PU*WheatMultiplied1WU*WheatMultiplied1PSU*WheatMultiplied1A*cutWheat*cutWheatMultiplied1PSU;
}

function fungainXP(number){
    xp = xp + gainXP*XPMultiplied1PU*XPMultiplied1WU*XPMultiplied1PSU*XPMultiplied1A*cutWheat*cutWheatMultiplied1PSU;
}

function funGain(){
    if (spawnedWheat >= 1){
        if (spawnedWheat >= cutWheat*cutWheatMultiplied1PSU){
            spawnedWheat = spawnedWheat - cutWheat*cutWheatMultiplied1PSU;
            fungainWheat();
            fungainXP();
            a1 = true
        }   
    }
}

function TB1(number){
    xp = xp + number;
    wheat = wheat + number;
}
function TB2(number){
    prestigepoint += number
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

    //gain()
    //gainXP *= 2
    //spawnedWheat += 50

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
    var xpCost=  Math.floor(50 * Math.pow(1.15,xplvl));
    if(xp >= xpCost){                                                                  
        xplvl = xplvl + 1; 
        perk = perk + 1;                                                                  
        xp = xp - xpCost,
        startPrestigeGain(); 
        update();                                                                
    };
    var nextXPCost = Math.floor(50 * Math.pow(1.15,xplvl));       
    document.getElementById('xpCost').innerHTML = Round(nextXPCost);
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
        a2 = true                                                           
    };
    var nextwheatWUCost = Math.floor(20 * Math.pow(1.2,wheatWU));       
    document.getElementById('wheatWUCost').innerHTML = Round(nextwheatWUCost);
};

function BuyxpWU(){
    var xpWUCost= Math.floor(50 * Math.pow(1.4,xpWU));  
    if(wheat >= xpWUCost){                                                                  
        xpWU = xpWU + 1; 
        XPMultiplied1WU = XPMultiplied1WU + 1                                                                  
        wheat = wheat - xpWUCost, 
        maxXPWU();  
        update(); 
        a2 = true                                                            
    };
    var nextxpWUCost = Math.floor(50 * Math.pow(1.4,xpWU));       
    document.getElementById('xpWUCost').innerHTML = Round(nextxpWUCost);
};

function BuycapWU(){
    var capWUCost= Math.floor(100 * Math.pow(1.6,capWU));  
    if(wheat >= capWUCost){                                                                  
        capWU = capWU + 1; 
        cappedWheatMultiplied1WU = cappedWheatMultiplied1WU + 0.20                                                                 
        wheat = wheat - capWUCost, 
        maxcapWU();  
        update();   
        a2 = true                                                          
    };
    var nextcapWUCost = Math.floor(100 * Math.pow(1.6,capWU));       
    document.getElementById('capWUCost').innerHTML = Round(nextcapWUCost);
};

function BuyspawnWU(){
    var spawnWUCost= Math.floor(250 * Math.pow(1.8,spawnWU)); 
    if(wheat >= spawnWUCost){                                                                  
        spawnWU = spawnWU + 1; 
        spawnMultiplied1WU = spawnMultiplied1WU + 0.20;                                                                 
        wheat = wheat - spawnWUCost, 
        maxspawnWU();
        update();  
        a2 = true                                                              
    };
    var nextspawnWUCost = Math.floor(250 * Math.pow(1.8,spawnWU));       
    document.getElementById('spawnWUCost').innerHTML = Round(nextspawnWUCost);
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
        a2 = true                                                            
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
        a2 = true                                                            
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
        a2 = true                                                         
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
        a2 = true                                                            
    };
    var nextspawnPerkCost = Math.floor(1 * Math.pow(1,spawnPerk));       
    document.getElementById('spawnPerkCost').innerHTML = nextspawnPerkCost;
};

//PRESTIGE

var prestige = 0;
var prestigepoint = 0;
var cutPSU = 0;
var wheatPSU = 0;
var xpPSU = 0;

function Prestige(){
    var prestigeCost= 30; 
    if(xplvl >= prestigeCost){                                                                  
        prestige = prestige + 1;                                                                 
        update();  
        prestigeGain();
        prestigeReset();  
        showPRS();  
        a3 = true                                                       
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
        a2 = true                                                          
    };
    var nextcutPSUCost = Math.floor(5 * Math.pow(3,cutPSU));       
    document.getElementById('cutPSUCost').innerHTML = nextcutPSUCost;
};
function BuywheatPSU(){
    var wheatPSUCost= Math.floor(20 * Math.pow(1.2,wheatPSU));  
    if(prestigepoint >= wheatPSUCost){                                                                  
        wheatPSU = wheatPSU + 1; 
        WheatMultiplied1PSU = WheatMultiplied1PSU + 0.5                                                               
        prestigepoint -= wheatPSUCost, 
        maxWheatPSU();  
        update(); 
        a2 = true                                                           
    };
    var nextCost = Math.floor(20 * Math.pow(1.2,wheatPSU));       
    document.getElementById('wheatPSUCost').innerHTML = Round(nextCost);
};
function BuyxpPSU(){
    var xpPSUCost= Math.floor(50 * Math.pow(1.4,xpPSU));  
    if(prestigepoint >= xpPSUCost){                                                                  
        xpPSU = xpPSU + 1; 
        XPMultiplied1PSU = XPMultiplied1PSU + 0.5                                                                
        prestigepoint -= xpPSUCost, 
        maxXPPSU();  
        update();   
        a2 = true                                                          
    };
    var nextCost = Math.floor(50 * Math.pow(1.4,xpPSU));       
    document.getElementById('xpPSUCost').innerHTML = Round(nextCost);
};

function prestigeGain(){
    prestigepoint = prestigepoint + gainPrestige;
};

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
    gainPrestige = 10+PPMultiplied1A-1;
    update();
};

//OTHER
function update(){

    document.getElementById('gainWheat').innerHTML = Round(gainWheat); 
    document.getElementById('gainXP').innerHTML = Round(gainXP);  
    document.getElementById('wheat').innerHTML = Round(wheat); 
    document.getElementById('xp').innerHTML = Round(xp);    
    document.getElementById('xplvl').innerHTML = Round2(xplvl);

    //document.getElementById('WheatMultiplied1WU').innerHTML = Round(WheatMultiplied1WU);

    //document.getElementById('XPMultiplied1PU').innerHTML = Round(XPMultiplied1PU);

    //document.getElementById('XPMultiplied1WU').innerHTML = Round(XPMultiplied1WU);

    //WHEAT

    document.getElementById('wheatWU').innerHTML = wheatWU;
    document.getElementById('xpWU').innerHTML = xpWU;
    document.getElementById('capWU').innerHTML = capWU;
    document.getElementById('spawnWU').innerHTML = spawnWU;

    //PERK

    document.getElementById('perk').innerHTML = Round(perk);
    document.getElementById('wheatPerk').innerHTML = wheatPerk;
    document.getElementById('xpPerk').innerHTML = xpPerk;
    document.getElementById('capPerk').innerHTML = capPerk;
    document.getElementById('spawnPerk').innerHTML = spawnPerk;

    //PRESTIGE

    document.getElementById('wheatPSU').innerHTML = wheatPSU;
    document.getElementById('xpPSU').innerHTML = xpPSU;
    document.getElementById('prestige').innerHTML = Round(prestige);

    document.getElementById('gainPrestige').innerHTML = Round(gainPrestige);
    document.getElementById('prestigepoint').innerHTML = Round(prestigepoint);
    document.getElementById('cutPSU').innerHTML = cutPSU;

    //OTHER 

    document.getElementById('UpgradesWheatTotal').innerHTML = Round(WheatMultiplied1PU*WheatMultiplied1WU*WheatMultiplied1PSU);
    document.getElementById('UpgradesXPTotal').innerHTML = Round(XPMultiplied1PU*XPMultiplied1WU*XPMultiplied1PSU);
    document.getElementById('wheatTotal').innerHTML = Round(gainWheat*WheatMultiplied1PU*WheatMultiplied1WU*WheatMultiplied1PSU*WheatMultiplied1A);
    document.getElementById('xpTotal').innerHTML = Round(gainXP*XPMultiplied1PU*XPMultiplied1WU*XPMultiplied1PSU*XPMultiplied1A);

    document.getElementById('spawnedWheat').innerHTML = Round2(spawnedWheat);
    document.getElementById('cappedWheat').innerHTML = Round(cappedWheat*cappedWheatMultiplied1WU*cappedWheatMultiplied1PU);
    document.getElementById('spawnWheat').innerHTML = Round(spawnWheat*spawnMultiplied1PU*spawnMultiplied1WU);
    document.getElementById('cutWheat').innerHTML = Round(cutWheat*cutWheatMultiplied1PSU);
    
    //ACHEIVEMENTS

    document.getElementById('WheatMultiplied1A').innerHTML = Round(WheatMultiplied1A);
    document.getElementById('XPMultiplied1A').innerHTML = Round(XPMultiplied1A);
    document.getElementById('PPMultiplied1A').innerHTML = Round(PPMultiplied1A);
    
};

//MAX WHEAT UPGRADES

function maxWheatWU(){
    if (wheatWU >= 100){
       wheatWU = 100;
       wheat = wheat +  1656359490
       WheatMultiplied1WU = WheatMultiplied1WU - 1
       a4 = true
    }
};

function maxXPWU(){
    if (xpWU >= 100){
       xpWU = 100;
       wheat = wheat + 20500930444249536
       XPMultiplied1WU = XPMultiplied1WU - 1
       a4 = true
    }
};

function maxcapWU(){
    if (capWU >= 50){
       capWU = 50;
       wheat = wheat + 1606938044258
       cappedWheatMultiplied1WU = cappedWheatMultiplied1WU - 0.20
       a4 = true
    }
};

function maxspawnWU(){
    if (spawnWU >= 50){
        spawnWU = 50;
        wheat = wheat + 1450658756452387
        spawnMultiplied1WU = spawnMultiplied1WU - 0.20
        a4 = true
    }
}
//MAX PERK UPGRADES

function maxWheatPerk(){
    if (wheatPerk >= 50){
       wheatPerk = 50;
       perk = perk + 1
       spawnMultiplied1PU = spawnMultiplied1PU - 0.25
       a4 = true
    }
};

function maxXPPerk(){
    if (xpPerk >= 50){
       xpPerk = 50;
       perk = perk + 1
       XPMultiplied1PU = XPMultiplied1PU - 0.25
       a4 = true
    }
};

function maxcapPerk(){
    if (capPerk >= 25){
       capPerk = 25;
       perk = perk + 1
       cappedWheatMultiplied1PU = cappedWheatMultiplied1PU - 0.20
       a4 = true
    }
};

function maxspawnPerk(){
    if (spawnPerk >= 20){
       spawnPerk = 20;
       perk = perk + 1
       spawnMultiplied1PU = spawnMultiplied1PU - 0.20
       a4 = true
    }
};

//MAX PRESTIGE UPGRADES

function maxcutPSU(){
    if (cutPSU >= 6){
       cutPSU = 5;
       prestigepoint = prestigepoint + 1215;
       cutWheatMultiplied1PSU = cutWheatMultiplied1PSU - 1
       a4 = true
    }
};

//PRESTIGE GAIN

function startPrestigeGain(){
    if (xplvl >= 30){
        gainPrestige = gainPrestige * 1.1
    }
};
function maxWheatPSU(){
    if (wheatPSU >= 100){
       wheatPSU = 100;
       prestigepoint +=  1656359490
       WheatMultiplied1PSU -= 0.5
       a4 = true
    }
};

function maxXPPSU(){
    if (xpPSU >= 100){
       xpPSU = 100;
       prestigepoint += 20500930444249536
       XPMultiplied1PDU -= 0.5
       a4 = true
    }
};
//PREVENT-ROUGE-DECIMALS

//math.config({precision: 2000});

function Round(input){

var output = Math.round(input * 100)/100;

    if (input >= 1e52){
        output = Math.round(input * 100)/100;
        output += ""
    }
    else if (input >= 1e49){
        output = Math.round(input / 1e48);
        output += "QiDc"
    }
    else if (input >= 1e46){
        output = Math.round(input / 1e45);
        output += "QaDc"
    }
    else if (input >= 1e43){
        output = Math.round(input / 1e42);
        output += "TDc"
    }
    else if (input >= 1e40){
        output = Math.round(input / 1e39);
        output += "DDc"
    }
    else if (input >= 1e37){
        output = Math.round(input / 1e36);
        output += "UDc"
    }
    else if (input >= 1e34){
        output = Math.round(input / 1e33);
        output += "Dc"
    }
    else if (input >= 1e31){
        output = Math.round(input / 1e30);
        output += "No"
    }
    else if (input >= 1e28){
        output = Math.round(input / 1e27);
        output += "Oc"
    }
    else if (input >= 1e25){
        output = Math.round(input / 1e24);
        output += "Sp"
    }
    else if (input >= 1e22){
        output = Math.round(input / 1e21);
        output += "Sx"
    }
    else if (input >= 1e19){
        output = Math.round(input / 1e18);
        output += "Qi"
    }
    else if (input >= 1e16){
        output = Math.round(input / 1e15);
        output += "Qa"
    }
    else if (input >= 1e13){
        output = Math.round(input / 1e12);
        output += "T"
    }
    else if (input >= 1e10){
        output = Math.round(input / 1e9);
        output += "B"
    }
    else if (input >= 1e7){
        output = Math.round(input / 1e6);
        output += "M"
    }
    else if (input >= 1e4){
        output = Math.floor(input / 1e3);
        output += "K"
    }
    else {
        output = Math.round(input * 100)/100;
    }
    //output = math.factorial(input);
    //input = math.format(output, {notation: 'fixed'});

	return output;
}

function Round2(input){
    var output = input.toFixed()

	return output;
}

//PREVENT-INFINITY

//SAVE

function loadGame(){
    var savedGame = JSON.parse(localStorage.getItem("gameSave"));
    if (typeof savedGame.wheat !== "undefined") wheat = savedGame.wheat;
    if (typeof savedGame.xp !== "undefined") xp = savedGame.xp;
    if (typeof savedGame.xplvl !== "undefined") xplvl = savedGame.xplvl;
    if (typeof savedGame.perk !== "undefined")  perk= savedGame.perk;
    if (typeof savedGame.prestige !== "undefined")  prestige= savedGame.prestige;
    if (typeof savedGame.prestigepoint !== "undefined")  prestigepoint= savedGame.prestigepoint;
    if (typeof savedGame.gainPrestige !== "undefined")   gainPrestige= savedGame.gainPrestige;
    if (typeof savedGame.wheatWU !== "undefined")  wheatWU= savedGame.wheatWU;
    if (typeof savedGame.xpWU !== "undefined")  xpWU= savedGame.xpWU;
    if (typeof savedGame.capWU !== "undefined")  capWU= savedGame.capWU;
    if (typeof savedGame.spawnWU !== "undefined")  spawnWU= savedGame.spawnWU;
    if (typeof savedGame.wheatPerk !== "undefined")  wheatPerk= savedGame.wheatPerk;
    if (typeof savedGame.xpPerk !== "undefined")  xpPerk= savedGame.xpPerk;
    if (typeof savedGame.capPerk !== "undefined")  capPerk= savedGame.capPerk;
    if (typeof savedGame.spawnPerk !== "undefined")  spawnPerk= savedGame.spawnPerk;
    if (typeof savedGame.cutPSU !== "undefined")  cutPSU= savedGame.cutPSU;
    if (typeof savedGame.wheatPSU !== "undefined")  wheatPSU= savedGame.wheatPSU;
    if (typeof savedGame.xpPSU !== "undefined")  xpPSU= savedGame.xpPSU;
    if (typeof savedGame.WheatMultiplied1A !== "undefined")  WheatMultiplied1A= savedGame.WheatMultiplied1A;
    if (typeof savedGame.WheatMultiplied1PSU !== "undefined")  WheatMultiplied1PSU= savedGame.WheatMultiplied1PSU;
    if (typeof savedGame.WheatMultiplied1PU !== "undefined")  WheatMultiplied1PU= savedGame.WheatMultiplied1PU;
    if (typeof savedGame.WheatMultiplied1WU !== "undefined")  WheatMultiplied1WU= savedGame.WheatMultiplied1WU;
    if (typeof savedGame.XPMultiplied1A !== "undefined")  XPMultiplied1A= savedGame.XPMultiplied1A;
    if (typeof savedGame. XPMultiplied1PSU !== "undefined")   XPMultiplied1PSU= savedGame. XPMultiplied1PSU;
    if (typeof savedGame.XPMultiplied1PU !== "undefined")  XPMultiplied1PU= savedGame.XPMultiplied1PU;
    if (typeof savedGame.XPMultiplied1WU !== "undefined")  XPMultiplied1WU= savedGame.XPMultiplied1WU;
    if (typeof savedGame.PPMultiplied1A !== "undefined")  PPMultiplied1A= savedGame.PPMultiplied1A;
    if (typeof savedGame.cutWheatMultiplied1PSU !== "undefined")  cutWheatMultiplied1PSU= savedGame.cutWheatMultiplied1PSU;
    if (typeof savedGame. cappedWheatMultiplied1PU !== "undefined")   cappedWheatMultiplied1PU= savedGame. cappedWheatMultiplied1PU;
    if (typeof savedGame.cappedWheatMultiplied1WU !== "undefined")  cappedWheatMultiplied1WU= savedGame.cappedWheatMultiplied1WU;
    if (typeof savedGame.spawnMultiplied1PU !== "undefined")  spawnMultiplied1PU= savedGame.spawnMultiplied1PU;
    if (typeof savedGame.spawnMultiplied1WU !== "undefined")  spawnMultiplied1WU= savedGame.spawnMultiplied1WU;
    if (typeof savedGame.a1 !== "undefined")  a1= savedGame.a1;
    if (typeof savedGame.a2 !== "undefined")  a2= savedGame.a2;
    if (typeof savedGame.a3 !== "undefined")  a3= savedGame.a3;
    if (typeof savedGame.a4 !== "undefined")  a4= savedGame.a4;
    if (typeof savedGame.a1s !== "undefined")  a1s= savedGame.a1s;
    if (typeof savedGame.a2s !== "undefined")  a2s= savedGame.a2s;
    if (typeof savedGame.a3s !== "undefined")  a3s= savedGame.a3s;
    if (typeof savedGame.a4s !== "undefined")  a4s= savedGame.a4s;
}

function saveGame(){
    var gameSave = {
        //RSC
        wheat: wheat,
        xp: xp,
        xplvl: xplvl,
        perk: perk,

        prestige: prestige,
        prestigepoint: prestigepoint,
        gainPrestige: gainPrestige,

        //UPGRADES

        wheatWU: wheatWU,
        xpWU: xpWU,
        capWU: capWU,
        spawnWU: spawnWU,

        wheatPerk: wheatPerk,
        xpPerk: xpPerk,
        capPerk: capPerk,
        spawnPerk: spawnPerk,

        cutPSU: cutPSU,
        wheatPSU: wheatPSU,
        xpPSU: xpPSU,

        //MULTIPLIERS

        WheatMultiplied1A: WheatMultiplied1A,
        WheatMultiplied1PSU: WheatMultiplied1PSU,
        WheatMultiplied1PU, WheatMultiplied1PU,
        WheatMultiplied1WU: WheatMultiplied1WU,

        XPMultiplied1A: XPMultiplied1A,
        XPMultiplied1PSU: XPMultiplied1PSU,
        XPMultiplied1PU: XPMultiplied1PU,
        XPMultiplied1WU: XPMultiplied1WU,

        PPMultiplied1A: PPMultiplied1A,

        cutWheatMultiplied1PSU,

        cappedWheatMultiplied1PU,
        cappedWheatMultiplied1WU,

        spawnMultiplied1PU,
        spawnMultiplied1WU,
        //AHCIEVEMENTS AND ADVANCEMENTS

        a1: a1,
        a2: a2,
        a3: a3,
        a4: a4,

        a1s: a1s,
        a2s: a2s,
        a3s: a3s,
        a4s: a4s
    };
    localStorage.setItem("gameSave", JSON.stringify(gameSave))
}

function removeSave(){
    if (confirm("Are You Sure You Want To Delete Your Save?")){
        localStorage.removeItem("gameSave");
        location.reload();
    }
}

window.onload = function(){
    loadGame();
};

//SHOW / HIDE FEATURES

const prestigeBtn = document.getElementById("prestigeBtn")
const prestigeUpg = document.getElementById("prestigeUpg")

prestigeBtn.style.display = "none"
prestigeUpg.style.display = "none"

window.setInterval(function(){
    showPRSB();
}, 10)
function showPRS(){
    prestigeUpg.style.display = "block"
}
function showPRSB(){
    if (xplvl >= 30){
        prestigeBtn.style.display = "block"
    }
    else{
        prestigeBtn.style.display = "none"
    }
}

//OLD VERSION UPDATES

const oldVersion = document.getElementById("oldVersion")

oldVersion.style.display = "none"

function soV(){
     if (oldVersion.style.display == "none"){
         oldVersion.style.display = "block" 
     }
     else{
         oldVersion.style.display = "none"
     }
}

const devConsole = document.getElementById("devConsole");
const after = document.getElementById("after");
const DBTN = document.getElementById("DBTN");
const sal = document.getElementById("sal");
const mainMap = document.getElementById("mainMap");

devConsole.style.display = "none";
after.style.display = "none";
DBTN.style.display = "none";

var OpenDC = false;
var NSF = true;
var TDC = 0;
function devConsoleShow(){
    if(confirm("Are You Sure You Want To Proceed? (You Cannot Save Beyond This Point)")){
       //saveGame();
       devConsole.style.display = "block";
       document.getElementById("PU").innerHTML = "Processing Units...";
       OpenDC = true
       sal.style.display = "none"
       //mainMap.style.display = "none"
    }
}
function ButtonShow(){
    DBTN.style.display = "block";
}
function devConsoleHide(){
       // removeSave();
       devConsole.style.display = "none";
       after.style.display = "none";
       DBTN.style.display = "none";
       OpenDC = false
       NSF = false
       TDC = 0
       //location.reload();
}
function afterDC(){
    if (TDC >= 4.27){
        document.getElementById("PU").innerHTML = ""
        after.style.display = "block";
    }
    if (OpenDC){
        TDC += 0.01
    }
}
a = true
function EDCW(){
    if (a){
        document.getElementById("Exit").innerHTML = "_"
        a = false
    }
    else{
        document.getElementById("Exit").innerHTML = ""
        a = true
    }
}
window.setInterval(function(){
    afterDC();
}, 10)
window.setInterval(function(){
    EDCW();
}, 1000)
document.addEventListener("keydown", function(event){
    if (event.ctrlKey && event.which == 83) {
        event.preventDefault();
        if (NSF){
            saveGame();
        }
    }
    if (event.ctrlKey && event.which == 76) {
        event.preventDefault();
        loadGame();
    }
    if (event.ctrlKey && event.which == 67) {
        removeSave();
    }
    if (event.altKey && event.which == 68) {
        event.preventDefault();
        devConsoleShow();
    }
    if (event.ctrlKey){
        if (devConsole.style.display == "block"){
            devConsoleHide();
        }
    }
    if (event.keyCode == 13){
        if (devConsole.style.display == "block"){
            ButtonShow();
        }
    }
}, false);

// ACHIEVEMENTS

const a1D = document.getElementById("a1D");
const a2D = document.getElementById("a2D");
const a3D = document.getElementById("a3D");
const a4D = document.getElementById("a4D");

const a1S = document.getElementById("a1S");
const a2S = document.getElementById("a2S");
const a3S = document.getElementById("a3S");


a1D.style.display = "none"
a2D.style.display = "none"
a3D.style.display = "none"
a4D.style.display = "none"

var a1 = false;
var a2 = false;
var a3 = false;
var a4 = false;

function a1anda2(){
    if (a1){
        a1D.style.display = "block"
    }
    if (a2){
        a2D.style.display = "block"
    }
}
function a3A(){
    if (XPMultiplied1A <= 1.20){
        if (WheatMultiplied1A <= 1.20){
            if (a3){
                a3D.style.display = "block"
                WheatMultiplied1A += 0.25
                XPMultiplied1A += 0.25
            }
        }
    }
    if (a3){
        a3D.style.display = "block"
    }
    if (WheatMultiplied1A >= 1.50){
        WheatMultiplied1A = 1.25
    }
    if (XPMultiplied1A >= 1.50){
        XPMultiplied1A = 1.25
    }
}
function a4A(){
    if (PPMultiplied1A <= 1.20){
        if (a4){
            a4D.style.display = "block"
            PPMultiplied1A += 0.20;
        }
    }
    if (a4){
        a4D.style.display = "block"
    }
    if (PPMultiplied1A >= 1.40){
        PPMultiplied1A = 1.20
    }
}
window.setInterval(function(){
    a1anda2();
    a3A();
    a4A();
}, 10)

//ADVANCEMENTS

var a1s = false;
var a2s = false;
var a3s = false;
var a4s = false;
