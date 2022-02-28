function incrementExoticMatter(x) {
  exoticmatter = infAdd(exoticmatter,x)
  document.getElementById("exoticmatter").innerHTML = infFormat(exoticmatter,false);            // Replaces the green 0 with the amount of exotic matter the player has
  document.getElementById("exoticmatterPerSec").innerHTML = infFormat(exoticmatterPerSec,true);
  totalexoticmatter = infAdd(totalexoticmatter,x)
  document.getElementById("totalExoticMatter").innerHTML = infFormat(totalexoticmatter,false);
  exoticmatterThisTributeReset = infAdd(exoticmatterThisTributeReset,x)
  document.getElementById("exoticMatterThisTributeReset").innerHTML = infFormat(exoticmatterThisTributeReset,false);
  exoticmatterThisWormholeReset = infAdd(exoticmatterThisWormholeReset,x)
  document.getElementById("exoticMatterThisWormholeReset").innerHTML = infFormat(exoticmatterThisWormholeReset,false);
}
function buyXAxis() {
  if (exoticmatter>XAxisCost) {
    exoticmatter=infSubtract(exoticmatter,XAxisCost)
    XAxis++
  }
}
function buyYAxis() {
  if (exoticmatter>YAxisCost) {
    exoticmatter=infSubtract(exoticmatter,YAxisCost)
    YAxis++
  }
}
function buyZAxis() {
  if (exoticmatter>ZAxisCost) {
    exoticmatter=infSubtract(exoticmatter,ZAxisCost)
    ZAxis++
  }
}
function buyWAxis() {
  if (exoticmatter>WAxisCost) {
    exoticmatter=infSubtract(exoticmatter,WAxisCost)
    WAxis++
  }
}
function buyVAxis() {
  if (exoticmatter>VAxisCost) {
    exoticmatter=infSubtract(exoticmatter,VAxisCost)
    VAxis++
  }
}
function buyUAxis() {
  if (exoticmatter>UAxisCost) {
    exoticmatter=infSubtract(exoticmatter,UAxisCost)
    UAxis++
  }
}
function buyTAxis() {
  if (exoticmatter>TAxisCost) {
    exoticmatter=infSubtract(exoticmatter,TAxisCost)
    TAxis++
  }
}
function buySAxis() {
  if (exoticmatter>SAxisCost) {
    exoticmatter=infSubtract(exoticmatter,SAxisCost)
    SAxis++
  }
}
function updateAxisCosts() {
  XAxisCost = (1+Math.log10(5+0.05*Math.max(0,XAxis-axisScalingStart)**3)**Math.max(1,XAxis/axisSuperscalingStart)*XAxis-tributeBoostFive*XAxis-axisCostDivisor)*axisCostExponent
  YAxisCost = (2*1.07**Math.max(0,YAxis-axisScalingStart)+0.113623*YAxis+0.062469*YAxis**(2**Math.max(YAxis/axisSuperscalingStart,1))-axisCostDivisor)*axisCostExponent
  ZAxisCost = (4+ZAxis**(1.379654224+0.002*Math.max(0,ZAxis-axisScalingStart)**2)*1.001**Math.max(ZAxis-axisSuperscalingStart,0)**2-axisCostDivisor)*axisCostExponent
  WAxisCost = (5.875+(WAxis+2.5*1.03**Math.max(0,WAxis-axisScalingStart)-2)**(2**Math.max(WAxis/axisSuperscalingStart,1))/2-axisCostDivisor)*axisCostExponent
  VAxisCost = (20+4.5*VAxis+0.5*VAxis**2+0.01*Math.max(0,VAxis-axisScalingStart)**(5*Math.max(VAxis/axisSuperscalingStart,1))-axisCostDivisor)*axisCostExponent
  UAxisCost = (35+10*UAxis+UAxis**(2*Math.max(UAxis/axisSuperscalingStart,1))*1.002**Math.max(0,UAxis-axisScalingStart)**2-axisCostDivisor)*axisCostExponent
  TAxisCost = (50+(9+1.1**Math.max(0,TAxis-axisScalingStart))*TAxis**Math.max(TAxis/axisSuperscalingStart,1)-axisCostDivisor)*axisCostExponent
  SAxisCost = (120*1.5**SAxis*1.05**Math.max(0,SAxis-axisScalingStart)**(2**Math.max(SAxis/axisSuperscalingStart,1))-axisCostDivisor)*axisCostExponent
}
function debugSave() {
  exoticmatter=0
  totalexoticmatter=0
  exoticmatterThisTributeReset=0
  exoticmatterThisWormholeReset=0
  exoticmatterPerSec=0
  ZAxisEffect=0
  Enhancer11Effect=0
  Enhancer12Effect=0
}
function statBreakdown(x) {
  if (x==1) {
    document.getElementById("StatBreakdown1XAxis").innerHTML = "× "+infFormat(XAxisEffect,true)+" ^ "+normFormat(XAxis+freeXAxis)
    output=XAxisEffect*(XAxis+freeXAxis)
    document.getElementById("StatBreakdown1XAxisT").innerHTML = infFormat(output,true)
    toggleTableRow("StatBreakdown1RXAxis",((XAxis+freeXAxis>0)&&(XAxisEffect!=0))?"show":"hide")
    document.getElementById("StatBreakdown1ZAxis").innerHTML = "× "+infFormat(ZAxisEffect,true)+" ^ "+normFormat(ZAxis+freeZAxis)
    output+=ZAxisEffect*(ZAxis+freeZAxis)
    document.getElementById("StatBreakdown1ZAxisT").innerHTML = infFormat(output,true)
    toggleTableRow("StatBreakdown1RZAxis",((ZAxis+freeZAxis>0)&&(ZAxisEffect!=0))?"show":"hide")
    document.getElementById("StatBreakdown1WAxis").innerHTML = "× "+infFormat(WAxisEffect,true)+" ^ "+normFormat(WAxis+freeWAxis)
    output+=WAxisEffect*(WAxis+freeWAxis)
    document.getElementById("StatBreakdown1WAxisT").innerHTML = infFormat(output,true)
    toggleTableRow("StatBreakdown1RWAxis",((WAxis+freeWAxis>0)&&(WAxisEffect!=0))?"show":"hide")
    document.getElementById("StatBreakdown1TAxis").innerHTML = "× "+infFormat(TAxisEffect,true)+" ^ "+normFormat(TAxis+freeTAxis)
    output+=TAxisEffect*(TAxis+freeTAxis)
    document.getElementById("StatBreakdown1TAxisT").innerHTML = infFormat(output,true)
    toggleTableRow("StatBreakdown1RTAxis",((TAxis+freeTAxis>0)&&(TAxisEffect!=0))?"show":"hide")
    document.getElementById("StatBreakdown1TributeBoost1").innerHTML = "× "+infFormat(tributeBoostOne,true)
    output+=tributeBoostOne
    document.getElementById("StatBreakdown1TributeBoost1T").innerHTML = infFormat(output,true)
    toggleTableRow("StatBreakdown1RTributeBoost1",(tributeBoostOne!=0)?"show":"hide")
    document.getElementById("StatBreakdown1TributeBoost6").innerHTML = "× "+infFormat(tributeBoostSix,true)+" ^ "+normFormat(YAxis+freeYAxis)
    output+=tributeBoostSix*(YAxis+freeYAxis)
    document.getElementById("StatBreakdown1TributeBoost6T").innerHTML = infFormat(output,true)
    toggleTableRow("StatBreakdown1RTributeBoost6",((YAxis+freeYAxis>0)&&(tributeBoostSix!=0))?"show":"hide")
    document.getElementById("StatBreakdown1Enhancer11").innerHTML = "× "+infFormat(Enhancer11Effect*ownedEnhancers.OneOne,true)
    output+=Enhancer11Effect*ownedEnhancers.OneOne
    document.getElementById("StatBreakdown1Enhancer11T").innerHTML = infFormat(output,true)
    toggleTableRow("StatBreakdown1REnhancer11",(ownedEnhancers.OneOne==0)?"hide":"show")
    document.getElementById("StatBreakdown1Enhancer12").innerHTML = "× "+infFormat(Enhancer12Effect*ownedEnhancers.OneTwo,true)
    output+=Enhancer12Effect*ownedEnhancers.OneTwo
    document.getElementById("StatBreakdown1Enhancer12T").innerHTML = infFormat(output,true)
    toggleTableRow("StatBreakdown1REnhancer12",(ownedEnhancers.OneTwo==0)?"hide":"show")
    document.getElementById("StatBreakdown1Enhancer13").innerHTML = "× "+infFormat(Enhancer13Effect*ownedEnhancers.OneThree,true)
    output+=Enhancer13Effect*ownedEnhancers.OneThree
    document.getElementById("StatBreakdown1Enhancer13T").innerHTML = infFormat(output,true)
    toggleTableRow("StatBreakdown1REnhancer13",(ownedEnhancers.OneThree==0)?"hide":"show")
    document.getElementById("StatBreakdown1Enhancer14").innerHTML = "× "+infFormat(Enhancer14Effect*ownedEnhancers.OneFour,true)
    output+=Enhancer14Effect*ownedEnhancers.OneFour
    document.getElementById("StatBreakdown1Enhancer14T").innerHTML = infFormat(output,true)
    toggleTableRow("StatBreakdown1REnhancer14",(ownedEnhancers.OneFour==0)?"hide":"show")
    document.getElementById("StatBreakdown1Enhancer42").innerHTML = "× "+infFormat(10*ownedEnhancers.FourTwo,true)
    output+=10*ownedEnhancers.FourTwo
    document.getElementById("StatBreakdown1Enhancer42T").innerHTML = infFormat(output,true)
    toggleTableRow("StatBreakdown1REnhancer42",(ownedEnhancers.FourTwo==1)?"show":"hide")
    document.getElementById("StatBreakdown1ExpandingEnergy").innerHTML = "× "+infFormat(expandingEnergyEffect,true)
    output+=expandingEnergyEffect
    document.getElementById("StatBreakdown1ExpandingEnergyT").innerHTML = infFormat(output,true)
    toggleTableRow("StatBreakdown1RExpandingEnergy",(expandingEnergyEffect==0)?"hide":"show")
    document.getElementById("StatBreakdown1SAxis").innerHTML = "^ "+SAxisEffect.toFixed(4)+" ^ "+normFormat(SAxis+freeSAxis)
    output*=SAxisEffect**(SAxis+freeSAxis)
    document.getElementById("StatBreakdown1SAxisT").innerHTML = infFormat(output,true)
    toggleTableRow("StatBreakdown1RSAxis",((SAxis+freeSAxis>0)&&(SAxisEffect!=1))?"show":"hide")
    document.getElementById("StatBreakdown1Enhancer41").innerHTML = "^ "+(ownedEnhancers.FourOne==1?1.1:1)
    output*=(ownedEnhancers.FourOne==1?1.1:1)
    document.getElementById("StatBreakdown1Enhancer41T").innerHTML = infFormat(output,true)
    toggleTableRow("StatBreakdown1REnhancer41",(ownedEnhancers.FourOne==1)?"show":"hide")
    document.getElementById("StatBreakdown1OfflineSpeedup").innerHTML = "× "+normFormat(offlineSpeedup)
    output+=Math.log10(offlineSpeedup)
    document.getElementById("StatBreakdown1OfflineSpeedupT").innerHTML = infFormat(output,true)
    toggleTableRow("StatBreakdown1ROfflineSpeedup",(offlineSpeedup>1.001)?"show":"hide")
  } else if (x==2) {
    document.getElementById("StatBreakdown2BaseGain").innerHTML = (exoticmatter<24)?0:infFormat(Math.max(0,exoticmatter-24)**0.5,false)
    output=(exoticmatter<24)?-100:Math.max(0,exoticmatter-24)**0.5
    document.getElementById("StatBreakdown2BaseGainT").innerHTML = infFormat(output,false)
    document.getElementById("StatBreakdown2UAxis").innerHTML = "× "+infFormat(UAxisEffect,true)+" ^ "+normFormat(UAxis+freeUAxis)
    output+=UAxisEffect*(UAxis+freeUAxis)
    document.getElementById("StatBreakdown2UAxisT").innerHTML = infFormat(output,false)
    toggleTableRow("StatBreakdown2RUAxis",((UAxis+freeUAxis>0)&&(UAxisEffect!=0))?"show":"hide")
    document.getElementById("StatBreakdown2TributeBoost4").innerHTML = "× "+infFormat(tributeBoostFour,true)
    output+=tributeBoostFour
    document.getElementById("StatBreakdown2TributeBoost4T").innerHTML = infFormat(output,false)
    toggleTableRow("StatBreakdown2RTributeBoost4",((UAxis+freeUAxis>0)&&(UAxisEffect!=0))?"show":"hide")
    document.getElementById("StatBreakdown2Enhancer44").innerHTML = "× "+infFormat(ownedEnhancers.FourFour,true)
    output+=ownedEnhancers.FourFour
    document.getElementById("StatBreakdown2Enhancer44T").innerHTML = infFormat(output,false)
    toggleTableRow("StatBreakdown2REnhancer44",(ownedEnhancers.FourFour==1)?"show":"hide")
    document.getElementById("StatBreakdown2DivineEnergy").innerHTML = "× "+infFormat(divineEnergyEffect,true)
    output+=divineEnergyEffect
    document.getElementById("StatBreakdown2DivineEnergyT").innerHTML = infFormat(output,false)
    toggleTableRow("StatBreakdown2RDivineEnergy",(divineEnergyEffect==0)?"hide":"show")
    document.getElementById("StatBreakdown2Enhancer43").innerHTML = "^ "+((ownedEnhancers.FourThree==1)?1.1:1)
    output*=(ownedEnhancers.FourThree==1)?1.1:1
    document.getElementById("StatBreakdown2Enhancer43T").innerHTML = infFormat(output,false)
    toggleTableRow("StatBreakdown2REnhancer43",(ownedEnhancers.FourThree)?"show":"hide")
    document.getElementById("StatBreakdown2UnspentTributes").innerHTML = "- "+infFormat(tributes,false)
    output=infSubtract(output,tributes)
    document.getElementById("StatBreakdown2UnspentTributesT").innerHTML = infFormat(output,false)
    document.getElementById("SSBBTributes").style = (fastestTributeReset<1e12)?"display:inline-block":"display:none"
  } else if (x==3) {
    document.getElementById("StatBreakdown3BaseGain").innerHTML = infFormat(baseDarkMatterGain,true)
    output=baseDarkMatterGain
    document.getElementById("StatBreakdown3BaseGainT").innerHTML = infFormat(output,true)
    document.getElementById("StatBreakdown3DarkXAxis").innerHTML = "× "+infFormat(darkXAxisEffect,true)+" ^ "+normFormat(darkXAxis+darkfreeXAxis)
    output+=darkXAxisEffect*(darkXAxis+darkfreeXAxis)
    document.getElementById("StatBreakdown3DarkXAxisT").innerHTML = infFormat(output,true)
    toggleTableRow("StatBreakdown3RDarkXAxis",((darkXAxis+darkfreeXAxis>0)&&(darkXAxisEffect!=0))?"show":"hide")
    document.getElementById("StatBreakdown3DarkZAxis").innerHTML = "× "+infFormat(darkZAxisEffect,true)+" ^ "+normFormat(darkZAxis+darkfreeZAxis)
    output+=darkZAxisEffect*(darkZAxis+darkfreeZAxis)
    document.getElementById("StatBreakdown3DarkZAxisT").innerHTML = infFormat(output,true)
    toggleTableRow("StatBreakdown3RDarkZAxis",((darkZAxis+darkfreeZAxis>0)&&(darkZAxisEffect!=0))?"show":"hide")
    document.getElementById("StatBreakdown3DarkUAxis").innerHTML = "× "+infFormat(darkUAxisEffect,true)+" ^ ("+normFormat(darkUAxis+darkfreeUAxis)+" × "+normFormat(totaldarkAxis)+")"
    output+=darkUAxisEffect*(darkUAxis+darkfreeUAxis)*totaldarkAxis
    document.getElementById("StatBreakdown3DarkUAxisT").innerHTML = infFormat(output,true)
    toggleTableRow("StatBreakdown3RDarkUAxis",((darkUAxis+darkfreeUAxis>0)&&(darkUAxisEffect!=0))?"show":"hide")
    document.getElementById("StatBreakdown3DarkTAxis").innerHTML = "× "+infFormat(darkTAxisEffect,true)+" ^ "+normFormat(darkTAxis+darkfreeTAxis)
    output+=darkTAxisEffect*(darkTAxis+darkfreeTAxis)
    document.getElementById("StatBreakdown3DarkTAxisT").innerHTML = infFormat(output,true)
    toggleTableRow("StatBreakdown3RDarkTAxis",((darkTAxis+darkfreeTAxis>0)&&(darkTAxisEffect!=0))?"show":"hide")
    document.getElementById("StatBreakdown3Axioms").innerHTML = "× "+infFormat(1,true)+" ^ "+normFormat(axioms)
    output+=axioms
    document.getElementById("StatBreakdown3AxiomsT").innerHTML = infFormat(output,true)
    toggleTableRow("StatBreakdown3RAxioms",(axioms>0)?"show":"hide")
    document.getElementById("StatBreakdown3DarkEnergy").innerHTML = "× "+infFormat(darkEnergyEffect,true)
    output+=darkEnergyEffect
    document.getElementById("StatBreakdown3AxiomsT").innerHTML = infFormat(output,true)
    toggleTableRow("StatBreakdown3RDarkEnergy",(darkEnergyEffect!=0)?"show":"hide")
    document.getElementById("StatBreakdown3DarkSAxis").innerHTML = "^ "+darkSAxisEffect.toFixed(4)+" ^ "+normFormat(darkSAxis+darkfreeSAxis)
    output*=darkSAxisEffect**(darkSAxis+darkfreeSAxis)
    document.getElementById("StatBreakdown3DarkSAxisT").innerHTML = infFormat(output,true)
    toggleTableRow("StatBreakdown3RDarkSAxis",((darkSAxis+darkfreeSAxis>0)&&(darkSAxisEffect!=1))?"show":"hide")
    document.getElementById("StatBreakdown3OfflineSpeedup").innerHTML = "× "+normFormat(offlineSpeedup)
    output+=Math.log10(offlineSpeedup)
    document.getElementById("StatBreakdown3OfflineSpeedupT").innerHTML = infFormat(output,true)
    toggleTableRow("StatBreakdown3ROfflineSpeedup",(offlineSpeedup>1.001)?"show":"hide")
    document.getElementById("SSBBDarkMatter").style = (DarkMatterUnlocked)?"display:inline-block":"display:none"
  }
}
function tributeReset() {
  if (pendingTributes>tributes) {
    exoticmatter=0
    exoticmatterPerSec=0
    XAxis=0
    YAxis=0
    ZAxis=0
    WAxis=0
    VAxis=0
    UAxis=0
    TAxis=0
    SAxis=0
    exoticmatterThisTributeReset=0
    fastestTributeReset=Math.min(fastestTributeReset,timeThisTributeReset)
    timeThisTributeReset=0
    tributes=pendingTributes
    tributeResets++
    expandingEnergy=0
    divineEnergy=0
    darkEnergy=0
  }
}
function forceTributeReset() {
  exoticmatter=0
  exoticmatterPerSec=0
  XAxis=0
  YAxis=0
  ZAxis=0
  WAxis=0
  VAxis=0
  UAxis=0
  TAxis=0
  SAxis=0
  exoticmatterThisTributeReset=0
  timeThisTributeReset=0
  expandingEnergy=0
  divineEnergy=0
  darkEnergy=0
}
function buyTributeUpgradeOne() {
  if ((tributes>=tributeUpgradeOne.cost[tributeUpgradeOne.purchased]) && (tributeUpgradeOne.purchased < 4)) {
    tributes=infSubtract(tributes,tributeUpgradeOne.cost[tributeUpgradeOne.purchased])
    tributeUpgradeOne.purchased++
  }
}
function buyTributeUpgradeTwo() {
  if ((tributes>=tributeUpgradeTwo.cost[tributeUpgradeTwo.purchased]) && (tributeUpgradeTwo.purchased < 8)) {
    tributes=infSubtract(tributes,tributeUpgradeTwo.cost[tributeUpgradeTwo.purchased])
    tributeUpgradeTwo.purchased++
  }
}
function buyTributeUpgradeThree() {
  if ((tributes>=tributeUpgradeThree.cost[tributeUpgradeThree.purchased]) && (tributeUpgradeThree.purchased < 6)) {
    tributes=infSubtract(tributes,tributeUpgradeThree.cost[tributeUpgradeThree.purchased])
    tributeUpgradeThree.purchased++
  }
}
function toggleAxisAutobuyer() {
  if (axisAutobuyerOn == true) {
    axisAutobuyerOn = false
  } else {
    axisAutobuyerOn = true
  }
}
function upgradeAxisAutobuyer() {
  if ((exoticmatter>=axisAutobuyerCost) && (axisAutobuyerUpgrades < 167)) {
    exoticmatter=infSubtract(exoticmatter,axisAutobuyerCost)
    axisAutobuyerUpgrades++
  }
}
function buyEnhancer() {
  if ((tributes>=enhancerCost) && (enhancers < 16)) {
    tributes=infSubtract(tributes,enhancerCost)
    enhancers++
    unspentEnhancers++
    enhancerCost=enhancerCost*1.05+0.1359785*enhancers**1.6338
  }
}
function buyEnhancerUpgrade(x) {
  if ((unspentEnhancers > 0) && (Math.floor(x/10) == enhancerRow[enhancers-unspentEnhancers])) {
    if ((x==11) && (ownedEnhancers.OneOne == 0)) {
      ownedEnhancers.OneOne=1
      unspentEnhancers=unspentEnhancers-1
    } else if ((x==12) && (ownedEnhancers.OneTwo == 0)) {
      ownedEnhancers.OneTwo=1
      unspentEnhancers=unspentEnhancers-1
    } else if ((x==13) && (ownedEnhancers.OneThree == 0)) {
      ownedEnhancers.OneThree=1
      unspentEnhancers=unspentEnhancers-1
    } else if ((x==14) && (ownedEnhancers.OneFour == 0)) {
      ownedEnhancers.OneFour=1
      unspentEnhancers=unspentEnhancers-1
    } else if ((x==21) && (ownedEnhancers.TwoOne == 0)) {
      ownedEnhancers.TwoOne=1
      unspentEnhancers=unspentEnhancers-1
    } else if ((x==22) && (ownedEnhancers.TwoTwo == 0)) {
      ownedEnhancers.TwoTwo=1
      unspentEnhancers=unspentEnhancers-1
    } else if ((x==23) && (ownedEnhancers.TwoThree == 0)) {
      ownedEnhancers.TwoThree=1
      unspentEnhancers=unspentEnhancers-1
    } else if ((x==24) && (ownedEnhancers.TwoFour == 0)) {
      ownedEnhancers.TwoFour=1
      unspentEnhancers=unspentEnhancers-1
    } else if ((x==31) && (ownedEnhancers.ThreeOne == 0)) {
      ownedEnhancers.ThreeOne=1
      unspentEnhancers=unspentEnhancers-1
    } else if ((x==32) && (ownedEnhancers.ThreeTwo == 0)) {
      ownedEnhancers.ThreeTwo=1
      unspentEnhancers=unspentEnhancers-1
    } else if ((x==33) && (ownedEnhancers.ThreeThree == 0)) {
      ownedEnhancers.ThreeThree=1
      unspentEnhancers=unspentEnhancers-1
    } else if ((x==34) && (ownedEnhancers.ThreeFour == 0)) {
      ownedEnhancers.ThreeFour=1
      unspentEnhancers=unspentEnhancers-1
    } else if ((x==41) && (ownedEnhancers.FourOne == 0)) {
      ownedEnhancers.FourOne=1
      unspentEnhancers=unspentEnhancers-1
    } else if ((x==42) && (ownedEnhancers.FourTwo == 0)) {
      ownedEnhancers.FourTwo=1
      unspentEnhancers=unspentEnhancers-1
    } else if ((x==43) && (ownedEnhancers.FourThree == 0)) {
      ownedEnhancers.FourThree=1
      unspentEnhancers=unspentEnhancers-1
    } else if ((x==44) && (ownedEnhancers.FourFour == 0)) {
      ownedEnhancers.FourFour=1
      unspentEnhancers=unspentEnhancers-1
    }
  }
}
function respecEnhancers() {
  ownedEnhancers.OneOne=0
  ownedEnhancers.OneTwo=0
  ownedEnhancers.OneThree=0
  ownedEnhancers.OneFour=0
  ownedEnhancers.TwoOne=0
  ownedEnhancers.TwoTwo=0
  ownedEnhancers.TwoThree=0
  ownedEnhancers.TwoFour=0
  ownedEnhancers.ThreeOne=0
  ownedEnhancers.ThreeTwo=0
  ownedEnhancers.ThreeThree=0
  ownedEnhancers.ThreeFour=0
  ownedEnhancers.FourOne=0
  ownedEnhancers.FourTwo=0
  ownedEnhancers.FourThree=0
  ownedEnhancers.FourFour=0
  unspentEnhancers=enhancers
  forceTributeReset()
}
function updateDarkAxisCosts() {
  darkXAxisCost = (1+darkXAxis**Math.max(1,darkXAxis/darkaxisScalingStart)**0.7-darkaxisCostDivisor)*darkaxisCostExponent
  darkYAxisCost = (2+(darkYAxis+darkYAxis**(1+Math.max(1,darkYAxis/darkaxisScalingStart)))*2-darkaxisCostDivisor)*darkaxisCostExponent
  darkZAxisCost = (4+2*darkZAxis**2*1.01**Math.max(0,darkZAxis-darkaxisScalingStart)**1.5-darkaxisCostDivisor)*darkaxisCostExponent
  darkWAxisCost = (8*1.375**darkWAxis**0.813352889*1.01**Math.max(0,darkWAxis-darkaxisScalingStart)**2-darkaxisCostDivisor)*darkaxisCostExponent
  darkVAxisCost = (16+darkVAxis*5+darkVAxis**2*2+darkVAxis**(2+Math.max(1,darkVAxis/darkaxisScalingStart))-darkaxisCostDivisor)*darkaxisCostExponent
  darkUAxisCost = (14+14*(0.25+Math.max(1,darkUAxis/darkaxisScalingStart))**darkUAxis-darkaxisCostDivisor)*darkaxisCostExponent
  darkTAxisCost = (36*1.1**Math.max(0,darkTAxis-darkaxisScalingStart)+20*darkTAxis-darkaxisCostDivisor)*darkaxisCostExponent
  darkSAxisCost = (40+(darkSAxis+1)**(3+Math.max(0,darkSAxis-darkaxisScalingStart))-darkaxisCostDivisor)*darkaxisCostExponent
}
function buyDarkXAxis() {
  if (darkmatter>darkXAxisCost) {
    darkmatter=infSubtract(darkmatter,darkXAxisCost)
    darkXAxis++
  }
}
function buyDarkYAxis() {
  if (darkmatter>darkYAxisCost) {
    darkmatter=infSubtract(darkmatter,darkYAxisCost)
    darkYAxis++
  }
}
function buyDarkZAxis() {
  if (darkmatter>darkZAxisCost) {
    darkmatter=infSubtract(darkmatter,darkZAxisCost)
    darkZAxis++
  }
}
function buyDarkWAxis() {
  if (darkmatter>darkWAxisCost) {
    darkmatter=infSubtract(darkmatter,darkWAxisCost)
    darkWAxis++
  }
}
function buyDarkVAxis() {
  if (darkmatter>darkVAxisCost) {
    darkmatter=infSubtract(darkmatter,darkVAxisCost)
    darkVAxis++
  }
}
function buyDarkUAxis() {
  if (darkmatter>darkUAxisCost) {
    darkmatter=infSubtract(darkmatter,darkUAxisCost)
    darkUAxis++
  }
}
function buyDarkTAxis() {
  if (darkmatter>darkTAxisCost) {
    darkmatter=infSubtract(darkmatter,darkTAxisCost)
    darkTAxis++
  }
}
function buyDarkSAxis() {
  if (darkmatter>darkSAxisCost) {
    darkmatter=infSubtract(darkmatter,darkSAxisCost)
    darkSAxis++
  }
}
function gainAxiom() {
  if (totaldarkAxis >= axiomRequirement) {
    darkmatter=0
    darkmatterPerSec=0
    darkXAxis=0
    darkYAxis=0
    darkZAxis=0
    darkWAxis=0
    darkVAxis=0
    darkUAxis=0
    darkTAxis=0
    darkSAxis=0
    axioms++
    if (exoticmatter > tributeExoticMatterReq) {
      tributeReset()
    } else {
      forceTributeReset()
    }
  }
}