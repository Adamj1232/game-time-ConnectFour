var canvas = document.getElementById("game")
var context = canvas.getContext('2d');
var piece = require('./pieces.js')
// var board = require('./board.js')
draw();
drawPiece();

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
  context.arc(50, 550, 45, 0, Math.PI * 2, true)
  context.fill();
}

canvas.addEventListener('click', function (e) {
  var x = e.offsetX;
  console.log(x)
  if(x<100){
    //draw in col1, push to col1 array
  } else if( x<200){
    //draw in col2
  } else if (x<300){
    //draw in col3
  } else if (x<400){
    //draw in col4
  } else if (x<500){
    //draw col5
  } else if (x<600){
    //draw in col6
  } else {
    draw in col7
  }

});
