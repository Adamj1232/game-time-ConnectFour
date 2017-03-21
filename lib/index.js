var canvas  = document.getElementById("game")
var context = canvas.getContext('2d');
var Piece   = require('./piece.js')
var Column  = require('./column.js')
// var Game    = require('./game.js')

var player = '1'

drawBoard();

let col1 = new Column();
let col2 = new Column();
let col3 = new Column();
let col4 = new Column();
let col5 = new Column();
let col6 = new Column();
let col7 = new Column();

let boardArr = [col1.colArr, col2.colArr, col3.colArr, col4.colArr, col5.colArr, col6.colArr, col7.colArr];

// Check for winner
function checkLine(a,b,c,d) {
  return ((a != undefined) && (a == b) && (a == c) && (a == d));
}

function checkForWinner(board) {
  // Check down
  for (r = 0; r < 3; r++) {
      for (c = 0; c < 7; c++) {
          if (checkLine(board[r][c], board[r+1][c], board[r+2][c], board[r+3][c])) {
              return board[r][c];
      }
    }
  }
  // Check right
  for (r = 0; r < 7; r++) {
      for (c = 0; c < 4; c++) {
          if (checkLine(board[r][c], board[r][c+1], board[r][c+2], board[r][c+3])) {
              return board[r][c];
      }
    }
  }
  // Check down-right
  for (r = 0; r <= 3; r++) {
      for (c = 0; c < 4; c++) {
          if (checkLine(board[r][c], board[r+1][c+1], board[r+2][c+2], board[r+3][c+3])) {
              return board[r][c];
      }
    }
  }
  // Check down-left
  for (r = 3; r <= 6; r++) {
      for (c = 0; c < 4; c++) {
          if (checkLine(board[r][c], board[r-1][c+1], board[r-2][c+2], board[r-3][c+3])) {
              return board[r][c];
      }
    }
  }
}

// if (window.confirm('Play another game?'))
// {
//   location.reload();
// }

function alertWinner (w) {
  switch(w) {
    case '1':
      if (window.confirm('Player 1 WINS! Play another game?'))
      {
        location.reload();
      }
      break;
    case '2':
      if (window.confirm('Player 2 WINS! Play another game?'))
      {
        location.reload();
      }
      break;
  }
}

function drawPlayer(startX, startY){
  let drawPiece = new Piece(startX, startY)
  player === '1' ?  drawPiece.drawPiece(context, 'black'): drawPiece.drawPiece(context, 'green');
}

function setPiece(player, column, startX) {
  boardArr[column].push(player);   //draw in col2
  var startY = 650 + (boardArr[column].length) * -100;
  drawPlayer(startX, startY);
}

function columnCount(player, column, startX) {
  if(boardArr[column].length < 6){
    setPiece(player, column, startX);
    changePlayer()
  } else {
    alert('Invalid choice! Choose an open column...duh');
  }
}

function changePlayer () {
  switch(player) {
    case '1':
      player = '2';
      break;
    case '2':
      player ='1';
      break;
  }
}

canvas.addEventListener('click', function (e) {
  var x = e.offsetX;
  console.log(x)

  if(x<100){
    columnCount(player, 0, 50)
    console.log(boardArr[0])   // col 1
  } else if( x<200){
    columnCount(player, 1, 150)
    console.log(boardArr[1])   // col 2
  } else if (x<300){
    columnCount(player, 2, 250)
    console.log(boardArr[2])   // col 3
  } else if (x<400){
    columnCount(player, 3, 350)
    console.log(boardArr[3])   // col 4
  } else if (x<500){
    columnCount(player, 4, 450)
    console.log(boardArr[4])   // col 5
  } else if (x<600){
    columnCount(player, 5, 550)
    console.log(boardArr[5])   // col 6
  } else {
    columnCount(player, 6, 650)
    console.log(boardArr[6])   // col 7
  }
    console.log(boardArr)
    alertWinner(checkForWinner(boardArr))
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
