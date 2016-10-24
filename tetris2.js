var canvas = document.getElementById("tetrisCanvas");
var ctx = canvas.getContext("2d");
var blockSize = 16;
var currentX = 8, currentY = 8, currentBlock;
var blocks = [];
var currentPair = [];
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
  
  var shapeNum = Math.floor(Math.random() * 7);
  var shape = blockShapes[shapeNum].split(" ");
  var currentHalf;
  var currentColor = blockColors[shapeNum];
  ctx.fillStyle = currentColor;
  
  if(blocks.length > 0) {
    
    for(var bl = 0; bl < blocks.length; bl++) {
      
      var b = blocks[bl];
      b[1] += blockSize;
      
      ctx.clearRect(8, 8, 480 - 8, 600 - 8);
      ctx.fillStyle = b[2];
      ctx.fillRect(b[0], b[1], blockSize, blockSize);
      ctx.rect(b[0], b[1], blockSize, blockSize);
      ctx.stroke();
      
    }
    
  }
  
  else {
    
    for(var i = 0; i < shape.length; i++) {

      currentHalf = shape[i];

      if(i == "0") {

        currentY = 8;

      }

      else if(i == "1") {

        currentY = blockSize + 8;

      }

      for(var n = 0; n < currentHalf.length; n++) {
        
        if(currentHalf[n] == "0") {

          currentX += blockSize;

          if(currentX > 464) {

            currentX = 8;

          }

        }

        else if(currentHalf[n] == "1") {
          
          if(currentX > 464) {

            currentX = 8;

            ctx.fillRect(currentX, currentY, blockSize, blockSize);
            ctx.rect(currentX, currentY, blockSize, blockSize);
            ctx.stroke();
            currentPair = [currentX, currentY, currentColor];
            blocks.push(currentPair);

            currentX += 16;

          }

          else {

            ctx.fillRect(currentX, currentY, blockSize, blockSize);
            ctx.rect(currentX, currentY, blockSize, blockSize);
            ctx.stroke();
            currentPair = [currentX, currentY, currentColor];
            blocks.push(currentPair);

            currentX += 16;

          }

        }

        else {
          alert("An error occurred with one of the shapes while trying to be displayed!");
        }

      }

    }
    
  }
  
}, 1000 * 2);
