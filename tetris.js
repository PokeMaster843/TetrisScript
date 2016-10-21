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
    var parts = piece.split(" ");
    ctx.fillStyle = blockColors[rand];
    
    for(var i = 0; i < 2; i++) {
      
      var currentPart = parts[i];
      
      for(var n = 0; n < 4; n++) {
        
        if(currentPart.charAt(n) == 0) {
          
          if(i == 0) {
            
            currentX += blockSize;
            
            if(currentX > 464) {
              currentX = 8;
            }
            
          }
          
          else {
            
            currentY = blockSize + 8;
            currentX += blockSize;
            
            if(currentX > 464) {
              currentX = 8;
            }
            
          }
          
        }
        
        else {
          
          if(i == 0) {
            
            if(currentX > 464) {
              currentX = 8;
            }
            
            else {
              
              ctx.fillRect(currentX, currentY, blockSize, blockSize);
              ctx.rect(currentX, currentY, blockSize, blockSize);
              ctx.stroke();
              
              currentX += blockSize;
              
            }
            
          }
          
          else {
            
            currentY = blockSize + 8;
            
            if(currentX > 464) {
              currentX = 8;
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
      
    }
    
    /*for(var i = 0; i < 7; i++) {
      
      if(piece.charAt(i) == 0) {
        
        currentX += blockSize;
        
        if(currentX > 464) {
          
          currentX = 8;
          currentY += blockSize;
          
        }
        
      }
      
      else {
        
        if(currentX > 464) {
          
          currentX = 8;
          currentY += blockSize;
          
        }
        
        else {
          
          if(piece )
          
          ctx.fillRect(currentX, currentY, blockSize, blockSize);
          ctx.rect(currentX, currentY, blockSize, blockSize);
          
          current
          
          blocks.push(currentBlock);
          ctx.stroke();
          currentX += blockSize;
          
        }
        
      }
      
    }*/
    
  }
  
}, 1000/60);
