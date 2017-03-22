const canvas  = document.getElementById("game")
const context = canvas.getContext('2d');
const Piece   = require('./piece')
const Column  = require('./column')
const Board    = require('./board')
const CheckForWinner   = require('./check-winner')

let CheckWinner = new CheckForWinner
let BoardDraw = new Board

BoardDraw.drawBoard(context);

let player = '1'

// move columns inside of board
let col1 = new Column();
let col2 = new Column();
let col3 = new Column();
let col4 = new Column();
let col5 = new Column();
let col6 = new Column();
let col7 = new Column();

// columns would be a better name
let boardArr = [
  col1.colArr,
  col2.colArr,
  col3.colArr,
  col4.colArr,
  col5.colArr,
  col6.colArr,
  col7.colArr
];

// //stalemate
// if(columns[0].colArr.length === 6 &&
//    columns[1].colArr.length === 6 &&
//    col3.colArr.length === 6 &&
//    col4.colArr.length === 6 &&
//    col5.colArr.length === 6 &&
//    col6.colArr.length === 6 &&
//    col7.colArr.length === 6)



// maybe switch to ternary
let changePlayer = () => {
  switch (player) {
    case '1':
      player = '2';
      break;
    case '2':
      player ='1';
      break;
  }
}

let alertWinner = (w) => {
  switch (w) {
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

// move to piece
let drawPlayer = (startX, startY) => {
  let drawPiece = new Piece(startX, startY)

  player === '1' ?  drawPiece.drawPiece(context, 'black'): drawPiece.drawPiece(context, 'green');
}

// move to piece.js
let setPiece = (player, column, startX) => {
  boardArr[column].push(player);   //draw in col2
  var startY = 650 + (boardArr[column].length) * -100;

  drawPlayer(startX, startY);
}

// move to column.js
let columnCount = (player, column, startX) => {
  if (boardArr[column].length < 6) {
    setPiece(player, column, startX);
    changePlayer()
  } else {
    alert('Invalid choice! Choose an open column...duh');
  }
}

canvas.addEventListener('click', (e) => {
  let x = e.offsetX;

  for (var i = 1; i <= boardArr.length; i++) {
    let columnX = i * 100;

    if (x < columnX) {
      columnCount(player, i - 1, columnX - 50);
      console.log(boardArr)
      alertWinner(CheckWinner.checkForWinner(boardArr))
      return;
    }
  }
})
