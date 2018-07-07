function LoadJson(file,callback){
  var a=new XMLHttpRequest();
a.overrideMimeType("application/json");
a.open("GET",file,true);
a.onreadystatechange=function(){
if(a.readyState===4 && a.status=="200") {
callback(a.responseText);
}
}
a.send(null);
}
LoadJson("data.json",function(text){
  let data=JSON.parse(text);
console.log(data);
career(data.co);
});

var right=document.getElementById('right');
function career(careerObject){
var career=document.createElement('h4');
career.textContent="Career Object";
career.appendChild(document.createElement("HR"));
  var p=document.createElement("p");
p.textContent=careerObject.data;
career.appendChild(p);
right.appendChild(career);
}


var edu=document.createElement("h4");
edu.textContent="Education Qualification :";
edu.appendChild(document.createElement("HR"));
