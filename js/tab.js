function openTab(name) {
  var i;
  var x = document.getElementsByClassName("tab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(name).style.display = "inline-block";  
}
function openTributeTab(name) {
  var i;
  var x = document.getElementsByClassName("tributeTab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(name).style.display = "inline-block";  
}
function openStatisticsTab(name) {
  var i;
  var x = document.getElementsByClassName("statisticsTab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(name).style.display = "inline-block";  
}
function openOptionsTab(name) {
  var i;
  var x = document.getElementsByClassName("optionsTab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(name).style.display = "inline-block";  
}
function openHTP(name) {
  var i;
  var x = document.getElementsByClassName("htpTab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(name).style.display = "inline-block";  
}
function openSSB(name) {
  var i;
  var x = document.getElementsByClassName("ssbTab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(name).style.display = "inline-block";  
}
function toggleTableRow(row,type) {
  if (type=="show") {
    document.getElementById(row).removeAttribute("hidden")
  } else {
    document.getElementById(row).setAttribute("hidden","hidden")
  }
}