var canvas = document.getElementById("tetrisCanvas");
var ctx = canvas.getContext("2d");
var spawnBlockIn = 60 * 10;
var blockSize = 16;
var currentX = 8, currentY = 8;
var blockColors = ["#00ffff", "#000099", "#ff9933", "#ffff00", "#00ff00", "#cc0099", "#ff0000"];
var blockShapes = ["11110000", "01000111", "00010111", "01100110", "00110110", "00100111", "11000110"];
/* 
 * The blockShapes work like this:
 * first 4 digits up here  - 1111
 * last 4 digits down here - 0000
*/
ctx.lineWidth = "8";
ctx.rect(4, 4, 480 - 8, 600 - 4);
ctx.stroke();
ctx.lineWidth = "1";

var update = setInterval(function() {
  
  ctx.stroke();
  if(spawnBlockIn > 0) {
    spawnBlockIn -= 2;
  }
  
  else {
    
    var rand = Math.floor(Math.random() * 7);
    var piece = blockShapes[rand];
    ctx.fillStyle = blockColors[rand];
    
    for(var i = 0; i < 7; i++) {
      
      if(piece.charAt(i) == 0) {
        
        currentX += blockSize;
        
        if(currentX > 464) {
          
          currentX = 8;
          currentY += 16;
          
        }
        
      }
      
      else {
        
        if(currentX > 464) {
          
          currentX = 8;
          currentY += 16;
          
        }
        
        else {
          
          ctx.fillRect(currentX, currentY, blockSize, blockSize);
          ctx.rect(currentX, currentY, blockSize, blockSize);
          ctx.stroke();
          currentX += blockSize;
          
        }
        
      }
      
    }
    
  }
  
}, 1000/60);
