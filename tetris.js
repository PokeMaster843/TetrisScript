var canvas = document.getElementById("tetrisCanvas");
var ctx = canvas.getContext("2d");
var blockSize = 8;
ctx.lineWidth = "8";
ctx.rect(0, 0, 480 - 8, 600 - 8);
ctx.stroke();

var update = setInterval(function() {
  
}, 1000/60);
