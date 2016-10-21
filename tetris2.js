var canvas = document.getElementById("tetrisCanvas");
var ctx = canvas.getContext("2d");
var spawnBlockIn = 60 * 10;
var blockSize = 16;
var currentX = 8, currentY = 8, currentBlock;
var blocks = [];
var blockColors = ["#00ffff", "#000099", "#ff9933", "#ffff00", "#00ff00", "#cc0099", "#ff0000"];
var blockShapes = ["1111 0000", "0100 0111", "0001 0111", "0110 0110", "0011 0110", "0010 0111", "1100 0110"];
/* 
 * The blockShapes work like this:
 * first 4 digits up here  - 1111
 * last 4 digits down here - 0000
*/
ctx.lineWidth = "8";
ctx.rect(4, 4, 480 - 8, 600 - 8);
ctx.stroke();
ctx.lineWidth = "1";

var update = setInterval(function() {
  
  
  
}, 1000 * 3);
