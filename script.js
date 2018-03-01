//Bayan Berri-- B^2
//SoftDev2 pd7
//K02--Connect the Dots ...
//2018-02-28
var pic = document.getElementById("svg");
var button=document.getElementsByTagName("button");
var b= button[0]
var oldX = -1;
var oldY = -1;

var drawDot = function(e) {
  var x = e.clientX;
  var y = e.clientY;

  var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  pic.appendChild(c);
  c.setAttribute("cx", x);
  c.setAttribute("cy", y);
  c.setAttribute("r", "25");
  c.setAttribute("fill", "black");
//For the line part
  if (oldX != -1 && oldY != -1) {
    var linea = document.createElementNS("http://www.w3.org/2000/svg", "line");
    pic.appendChild(linea);
    linea.setAttribute("x1", oldX);
    linea.setAttribute("y1", oldY);
    linea.setAttribute("x2", x);
    linea.setAttribute("y2", y);
    linea.setAttribute("r",2);
    linea.setAttribute("fill",'black');
    linea.setAttribute("stroke","black");
  }

  oldX = x;
  oldY = y;
}
var clear=function(){
  pic.innerHTML="";
  oldX=-1;
  oldY=-1;
}


pic.addEventListener("click", drawDot);
b.addEventListener("click",clear)
