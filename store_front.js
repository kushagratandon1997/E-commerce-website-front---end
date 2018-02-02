
var addLays = 300; 
var addOil = 300; 
var addGel = 300; 
var addOats = 300; 
var addCleaner = 300; 
var addHoney = 300; 
var total = 0; 
var listOutput = document.getElementById("listOutput");
document.getElementById("addLays").onclick = function() {
this.className = "hideItem"; 																	
var li = document.createElement("li");												
var liText = document.createTextNode("Lays $300.00");			
li.appendChild(liText);																				
listOutput.appendChild(li);  																	

total = total+addLays; 																				 
document.getElementById("total").innerHTML = total; 					
}
document.getElementById("addOil").onclick = function() {
this.className = "hideItem"; 																	

var li = document.createElement("li");												
var liText = document.createTextNode("Oil $300.00");			
li.appendChild(liText);																				
listOutput.appendChild(li);  																	

total = total+addOil; 																				 
document.getElementById("total").innerHTML = total; 					
}
document.getElementById("addGel").onclick = function() 
{
this.className = "hideItem"; 																	

var li = document.createElement("li");												
var liText = document.createTextNode("Gel $350.00");			
li.appendChild(liText);																				
listOutput.appendChild(li);  																	

total = total+addGel; 																				
document.getElementById("total").innerHTML = total; 					
}
document.getElementById("addOats").onclick = function() 
{
this.className = "hideItem"; 																	

var li = document.createElement("li");												
var liText = document.createTextNode("Oats $350.00");			
li.appendChild(liText);																				
listOutput.appendChild(li);  																	

total = total+addOats; 																				
document.getElementById("total").innerHTML = total; 					
}
document.getElementById("addCleaner").onclick = function() {
this.className = "hideItem"; 																	

var li = document.createElement("li");												
var liText = document.createTextNode("Cleaner $350.00");			
li.appendChild(liText);																				
listOutput.appendChild(li);  																	
total = total+addCleaner; 																				
document.getElementById("total").innerHTML = total; 					
}
document.getElementById("addHoney").onclick = function() {
this.className = "hideItem"; 																	

var li = document.createElement("li");												
var liText = document.createTextNode("Honey $450.00");			
li.appendChild(liText);																				
listOutput.appendChild(li);  																	

total = total+addHoney; 																				
document.getElementById("total").innerHTML = total; 					
}
document.getElementById("reset").onclick = function() 
{ 
  var butt = document.getElementsByTagName("input"); 
	for (var i = 0; i < butt.length; i++) { 
   	butt[i].className = "";
	}
	document.getElementById("listOutput").innerHTML = "";
  total= 0;
  document.getElementById("total").innerHTML = total;
}
