var canvas = document.getElementById("game")
var context = canvas.getContext('2d');
var piece = require('./pieces.js')
// var board = require('./board.js')

var boardArr = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
]

draw();

drawPiece();

canvas.addEventListener('click', function (e) {
  var x = e.offsetX;
  console.log(x)
    if(x<100){
      boardArr[5].splice(0,1,1)//draw in col1, push to col1 array
      console.log(boardArr[5])
    } else if( x<200){
      boardArr[5].splice(1,1,1)//draw in col2
      console.log(boardArr[5])
    } else if (x<300){
      boardArr[5].splice(2,1,1)//draw in col3
      console.log(boardArr[5])
    } else if (x<400){
      boardArr[5].splice(3,1,1)//draw in col4
      console.log(boardArr[5])
    } else if (x<500){
      boardArr[5].splice(4,1,1)//draw col5
      console.log(boardArr[5])
    } else if (x<600){
      boardArr[5].splice(5,1,1)//draw in col6
      console.log(boardArr[5])
    } else {
      boardArr[5].splice(6,1,1)//draw in col7
      console.log(boardArr[5])
    }
  });

function draw() {
  for (var x = 0; x < 700; x += 100) {
    context.moveTo(x, 0);
    context.lineTo(x, 700);
  }

  for (var y = 0; y < 600; y += 100) {
    context.moveTo(0, y);
    context.lineTo(800, y);
  }

  context.strokeStyle = "";
  context.stroke();
}

function drawPiece() {
  context.beginPath();
  context.fillStyle = this.color;
  context.arc(150, 550, 45, 0, Math.PI * 2, true)
  context.fill();
}
