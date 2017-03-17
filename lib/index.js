var canvas  = document.getElementById("game")
var context = canvas.getContext('2d');
var Piece   = require('./piece.js')
var Column  = require('./column.js')

let z = 'p1'

drawBoard();

let col1 = new Column();
let col2 = new Column();
let col3 = new Column();
let col4 = new Column();
let col5 = new Column();
let col6 = new Column();
let col7 = new Column();

let boardArr = [col1.squares, col2.squares, col3.squares, col4.squares, col5.squares, col6.squares, col7.squares];

for (var i = 0; i < boardArr.length; i++) {
  console.log(boardArr[i])
}

function drawPlayer(startX, startY){
  let drawPiece = new Piece(startX, startY)
  z === 'p1' ?  drawPiece.drawPiece(context, 'black') : drawPiece.drawPiece(context, 'green')
}

function setPiece(z, column, startX) {
  boardArr[column].push(z);   //draw in col2
  var startY = 650 + (boardArr[column].length) * -100;
  drawPlayer(startX, startY);
}

function columnCount(z, column, startX) {
  if(boardArr[column].length < 6){
    setPiece(z, column, startX);
  } else {
    alert('Invalid choice! Choose an open column...duh');
    let z = !z
  }
}



canvas.addEventListener('click', function (e) {
  var x = e.offsetX;
  console.log(x)

  if(x<100){
    columnCount(z, 0, 50)
    console.log(boardArr[0])

  // col 1
  } else if( x<200){
    columnCount(z, 1, 150)
    console.log(boardArr[1])

  // col 2
  } else if (x<300){
    columnCount(z, 2, 250)
    console.log(boardArr[2])

  } else if (x<400){
    columnCount(z, 3, 350)
    console.log(boardArr[3])

  } else if (x<500){
    columnCount(z, 4, 450)
    console.log(boardArr[4])

  } else if (x<600){
    columnCount(z, 5, 550)
    console.log(boardArr[5])

  } else {
    columnCount(z, 6, 650)
    console.log(boardArr[6])
  }
  z === 'p1' ?  z = 'p2' : z = 'p1'
    console.log(boardArr)
});


function drawBoard() {
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
