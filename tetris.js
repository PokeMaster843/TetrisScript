var canvas = document.getElementById("tetrisCanvas");
var ctx = canvas.getContext("2d");
var spawnBlockIn = 60 * 10;
var blockSize = 8;
var blockColors = ["#00ffff", "#000099", "#ff9933", "#ffff00", "#00ff00", "#cc0099", "#ff0000"];
var blockShapes = ["00001111", "01000111", "00010111", "01100110", "00110110", "00100111", "11000110"];
/* 
 * The blockShapes work like this:
 * first 4 digits up here  - 0000
 * last 4 digits down here - 1111
*/
var startX = 5, startY = 5, i = 0;
ctx.lineWidth = "8";
ctx.rect(4, 4, 480 - 8, 600 - 8);
ctx.stroke();
ctx.lineWidth = "1";

var update = setInterval(function() {
  
  if(spawnBlockIn > 0) {
    spawnBlockIn -= 1;
  }
  
  else {
    
    spawnBlockIn = 60 * 10;
    ctx.rect(4 + i, 4, blockSize, blockSize);
    i += 8;
    ctx.stroke();
    
  }
  
}, 1000/60);
