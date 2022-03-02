function toggleNotation() {
  if (notation == "Alemaninc Ordinal") {
    notation = "Double Logarithm"
  } else if (notation == "Double Logarithm") {
    notation = "Engineering"
  } else if (notation == "Engineering") {
    notation = "Infinity"
  } else if (notation == "Infinity") {
    notation = "Logarithm"
  } else if (notation == "Logarithm") {
    notation = "Mixed scientific"
  } else if (notation == "Mixed scientific") {
    notation = "Scientific"
  } else if (notation == "Scientific") {
    notation = "Alemaninc Ordinal"
  } else {
    notation = "Scientific"
  }
}
function save() {
  var save = {
    exoticmatter: exoticmatter,
    exoticmatterPerSec: exoticmatterPerSec,
    exoticmatterThisTributeReset: exoticmatterThisTributeReset,
    exoticmatterThisWormholeReset: exoticmatterThisWormholeReset,
    XAxis: XAxis,
    YAxis: YAxis,
    ZAxis: ZAxis,
    WAxis: WAxis,
    VAxis: VAxis,
    UAxis: UAxis,
    TAxis: TAxis,
    SAxis: SAxis,
    timePlayed: timePlayed,
    HTPshown: HTPshown,
    timeThisTributeReset: timeThisTributeReset,
    fastestTributeReset: fastestTributeReset,
    timeThisWormholeReset: timeThisWormholeReset,
    fastestWormholeReset: fastestWormholeReset,
    tributeResets: tributeResets,
    tributes: tributes,
    notation: notation,
    autosaveIsOn: autosaveIsOn,
    offlineSpeedupLength: offlineSpeedupLength,
    timeLeft: Number(new Date()),
    tributeUpgradeOneBought: tributeUpgradeOne.purchased,
    tributeUpgradeTwoBought: tributeUpgradeTwo.purchased,
    tributeUpgradeThreeBought: tributeUpgradeThree.purchased,
    axisAutobuyerOn: axisAutobuyerOn,
    axisAutobuyerUpgrades: axisAutobuyerUpgrades,
    enhancers: enhancers,
    unspentEnhancers: unspentEnhancers,
    enhancerCost: enhancerCost,
    ownedEnhancers: ownedEnhancers,
    darkmatter: darkmatter,
    darkXAxis: darkXAxis,
    darkYAxis: darkYAxis,
    darkZAxis: darkZAxis,
    darkWAxis: darkWAxis,
    darkVAxis: darkVAxis,
    darkUAxis: darkUAxis,
    darkTAxis: darkTAxis,
    darkSAxis: darkSAxis,
    axioms: axioms,
    energyTypesUnlocked: energyTypesUnlocked,
    expandingEnergy: expandingEnergy,
    divineEnergy: divineEnergy,
    darkEnergy: darkEnergy
  }
  localStorage.setItem("save",JSON.stringify(save)); 
}
function load(type) {
  savecounter++
  if (type=="normal") {
    var savegame = JSON.parse(localStorage.getItem("save"));
  } else if (type=="import") {
    var savegame = JSON.parse(atob(prompt("Copy and paste your save file here:")))
  }
  if ((typeof savegame.exoticmatter !== "undefined") && !Number.isNaN(savegame.exoticmatter)) exoticmatter = savegame.exoticmatter;
  if ((typeof savegame.exoticmatterPerSec !== "undefined") && !Number.isNaN(savegame.exoticmatterPerSec)) exoticmatterPerSec = savegame.exoticmatterPerSec;
  if ((typeof savegame.totalexoticmatter !== "undefined") && !Number.isNaN(savegame.totalexoticmatter)) totalexoticmatter = savegame.totalexoticmatter;
  if ((typeof savegame.exoticmatterThisTributeReset !== "undefined") && !Number.isNaN(savegame.exoticmatterThisTributeReset)) exoticmatterThisTributeReset = savegame.exoticmatterThisTributeReset;
  if ((typeof savegame.exoticmatterThisWormholeReset !== "undefined") && !Number.isNaN(savegame.exoticmatterThisWormholeReset)) exoticmatterThisWormholeReset = savegame.exoticmatterThisWormholeReset;
  if ((typeof savegame.XAxis !== "undefined") && !Number.isNaN(savegame.XAxis)) XAxis = savegame.XAxis;
  if ((typeof savegame.YAxis !== "undefined") && !Number.isNaN(savegame.YAxis)) YAxis = savegame.YAxis;
  if ((typeof savegame.ZAxis !== "undefined") && !Number.isNaN(savegame.ZAxis)) ZAxis = savegame.ZAxis;
  if ((typeof savegame.WAxis !== "undefined") && !Number.isNaN(savegame.WAxis)) WAxis = savegame.WAxis;
  if ((typeof savegame.VAxis !== "undefined") && !Number.isNaN(savegame.VAxis)) VAxis = savegame.VAxis;
  if ((typeof savegame.UAxis !== "undefined") && !Number.isNaN(savegame.UAxis)) UAxis = savegame.UAxis;
  if ((typeof savegame.TAxis !== "undefined") && !Number.isNaN(savegame.TAxis)) TAxis = savegame.TAxis;
  if ((typeof savegame.SAxis !== "undefined") && !Number.isNaN(savegame.SAxis)) SAxis = savegame.SAxis;
  if ((typeof savegame.timePlayed !== "undefined") && !Number.isNaN(savegame.timePlayed)) timePlayed = savegame.timePlayed;
  if ((typeof savegame.HTPshown !== "undefined") && !Number.isNaN(savegame.HTPshown)) HTPshown = savegame.HTPshown;
  if ((typeof savegame.timeThisTributeReset !== "undefined") && !Number.isNaN(savegame.timeThisTributeReset)) timeThisTributeReset = savegame.timeThisTributeReset;
  if ((typeof savegame.fastestTributeReset !== "undefined") && !Number.isNaN(savegame.fastestTributeReset)) fastestTributeReset = savegame.fastestTributeReset;
  if ((typeof savegame.timeThisWormholeReset !== "undefined") && !Number.isNaN(savegame.timeThisWormholeReset)) timeThisWormholeReset = savegame.timeThisWormholeReset;
  if ((typeof savegame.fastestWormholeReset !== "undefined") && !Number.isNaN(savegame.fastestWormholeReset)) fastestWormholeReset = savegame.fastestWormholeReset;
  if ((typeof savegame.tributeResets !== "undefined") && !Number.isNaN(savegame.tributeResets)) tributeResets = savegame.tributeResets;
  if ((typeof savegame.tributes !== "undefined") && !Number.isNaN(savegame.tributes)) tributes = savegame.tributes; 
  if (typeof savegame.notation !== "undefined") notation = savegame.notation;
  if (typeof savegame.autosaveIsOn !== "undefined") autosaveIsOn = savegame.autosaveIsOn;
  if ((typeof savegame.offlineSpeedupLength !== "undefined") && !Number.isNaN(savegame.offlineSpeedupLength)) offlineSpeedupLength = savegame.offlineSpeedupLength
  if ((typeof savegame.offlineSpeedupLength !== "undefined") && !Number.isNaN(savegame.offlineSpeedupLength)) offlineTime = savegame.offlineSpeedupLength
  if ((typeof savegame.timeLeft !== "undefined") && !Number.isNaN(savegame.timeLeft)) baseOfflineSpeedup = 1+(Number(new Date())-savegame.timeLeft)/(offlineSpeedupLength*1000)
  if ((typeof savegame.tributeUpgradeOneBought !=="undefined") && !Number.isNaN(savegame.tributeUpgradeOneBought)) tributeUpgradeOne.purchased = savegame.tributeUpgradeOneBought;
  if ((typeof savegame.tributeUpgradeTwoBought !=="undefined") && !Number.isNaN(savegame.tributeUpgradeTwoBought)) tributeUpgradeTwo.purchased = savegame.tributeUpgradeTwoBought;
  if ((typeof savegame.tributeUpgradeThreeBought !=="undefined") && !Number.isNaN(savegame.tributeUpgradeThreeBought)) tributeUpgradeThree.purchased = savegame.tributeUpgradeThreeBought;
  if ((typeof savegame.axisAutobuyerOn !== "undefined") && !Number.isNaN(savegame.axisAutobuyerOn)) axisAutobuyerOn = savegame.axisAutobuyerOn;
  if ((typeof savegame.axisAutobuyerUpgrades !== "undefined") && !Number.isNaN(savegame.axisAutobuyerUpgrades)) axisAutobuyerUpgrades = savegame.axisAutobuyerUpgrades;
  if ((typeof savegame.enhancers !=="undefined") && !Number.isNaN(savegame.enhancers)) enhancers = savegame.enhancers;
  if ((typeof savegame.unspentEnhancers !=="undefined") && !isNaN(savegame.unspentEnhancers)) unspentEnhancers = savegame.unspentEnhancers;
  if ((typeof savegame.enhancerCost !=="undefined") && !Number.isNaN(savegame.enhancerCost)) enhancerCost = savegame.enhancerCost;
  if (typeof savegame.ownedEnhancers !=="undefined") ownedEnhancers = savegame.ownedEnhancers;
  if ((typeof savegame.darkmatter !== "undefined") && !Number.isNaN(savegame.darkmatter)) darkmatter = savegame.darkmatter;
  if ((typeof savegame.darkXAxis !== "undefined") && !Number.isNaN(savegame.darkXAxis)) darkXAxis = savegame.darkXAxis;
  if ((typeof savegame.darkYAxis !== "undefined") && !Number.isNaN(savegame.darkYAxis)) darkYAxis = savegame.darkYAxis;
  if ((typeof savegame.darkZAxis !== "undefined") && !Number.isNaN(savegame.darkZAxis)) darkZAxis = savegame.darkZAxis;
  if ((typeof savegame.darkWAxis !== "undefined") && !Number.isNaN(savegame.darkWAxis)) darkWAxis = savegame.darkWAxis;
  if ((typeof savegame.darkVAxis !== "undefined") && !Number.isNaN(savegame.darkVAxis)) darkVAxis = savegame.darkVAxis;
  if ((typeof savegame.darkUAxis !== "undefined") && !Number.isNaN(savegame.darkUAxis)) darkUAxis = savegame.darkUAxis;
  if ((typeof savegame.darkTAxis !== "undefined") && !Number.isNaN(savegame.darkTAxis)) darkTAxis = savegame.darkTAxis;
  if ((typeof savegame.darkSAxis !== "undefined") && !Number.isNaN(savegame.darkSAxis)) darkSAxis = savegame.darkSAxis;
  if ((typeof savegame.axioms !== "undefined") && !Number.isNaN(savegame.axioms)) axioms = savegame.axioms;
  if ((typeof savegame.energyTypesUnlocked !== "undefined") && !Number.isNaN(savegame.energyTypesUnlocked)) energyTypesUnlocked = savegame.energyTypesUnlocked;
  if ((typeof savegame.expandingEnergy !== "undefined") && !Number.isNaN(savegame.expandingEnergy)) expandingEnergy = savegame.expandingEnergy;
  if ((typeof savegame.divineEnergy !== "undefined") && !Number.isNaN(savegame.divineEnergy)) divineEnergy = savegame.divineEnergy;
  if ((typeof savegame.darkEnergy !== "undefined") && !Number.isNaN(savegame.darkEnergy)) darkEnergy = savegame.darkEnergy;
}
function exportSave() {
  save()
  navigator.clipboard.writeText(btoa(localStorage.getItem("save")))
  alert("Copied to clipboard")
}
function wipeSave() {
  let numa = Math.floor(50*3**Math.random())
  let numb = Math.floor(50*3**Math.random())
  let answer = numa*numb
  let confirm = prompt("To confirm that you want to wipe your save, answer this question: What is "+numa+" × "+numb+"?")
  if (confirm==answer) {
    exoticmatter = 0;
    totalexoticmatter = 0;
    exoticmatterThisTributeReset = 0;
    exoticmatterThisWormholeReset = 0;
    exoticmatterPerSec = 0;
    XAxis = 0;
    YAxis = 0;
    ZAxis = 0;
    WAxis = 0;
    VAxis = 0;
    UAxis = 0;
    TAxis = 0;
    SAxis = 0;
    XAxisEffect=0
    YAxisEffect=-3
    ZAxisEffect=0
    WAxisEffect=0
    VAxisEffect=0
    UAxisEffect=0
    TAxisEffect=0
    SAxisEffect=0
    axisUnlocked = 0;
    timePlayed = 0;
    HTPshown = 1;
    timeThisTributeReset = 0;
    fastestTributeReset = 9e15;
    timeThisWormholeReset = 0;
    fastestWormholeReset = 9e15;
    tributeResets = 0
    tributes = -100;
    notation = "Mixed scientific"
    autosaveIsOn = "On"
    tributeUpgradeOne.purchased = 0
    tributeUpgradeTwo.purchased = 0
    axisAutobuyerUpgrades = 0
    axisAutobuyerOn = false
    tributeUpgradeThree.purchased = 0
    respecEnhancers()
    enhancers = 0
    unspentEnhancers = 0
    enhancerCost = 3.30103
    Enhancer11Effect=0
    Enhancer12Effect=0
    Enhancer13Effect=0
    Enhancer14Effect=0
    DarkMatterUnlocked = false
    darkmatter = 0
    darkXAxis = 0
    darkYAxis = 0
    darkZAxis = 0
    darkWAxis = 0
    darkVAxis = 0
    darkUAxis = 0
    darkTAxis = 0
    darkSAxis = 0
    axioms = 0
    energyTypesUnlocked = 0
    expandingEnergy = 0
    divineEnergy = 0
    darkEnergy = 0
  } else {
    alert("Incorrect answer, wiping did not proceed.")
  }
}
function toggleOfflineSpeedupLength() {
  if (offlineSpeedupLength==1) {
    offlineSpeedupLength=5
  } else if (offlineSpeedupLength==5) {
    offlineSpeedupLength=10
  } else if (offlineSpeedupLength==10) {
    offlineSpeedupLength=30
  } else if (offlineSpeedupLength==30) {
    offlineSpeedupLength=60
  } else if (offlineSpeedupLength==60) {
    offlineSpeedupLength=300
  } else if (offlineSpeedupLength==300) {
    offlineSpeedupLength=3600
  } else {
    offlineSpeedupLength=1
  }
}
function toggleAutosave() {
  if (autosaveIsOn == "On") {
    autosaveIsOn = "Off"
  } else if (autosaveIsOn =="Off") {
    autosaveIsOn = "On"
  }
}