const canvas           = document.getElementById("game")
const context          = canvas.getContext('2d');
const Piece            = require('./Piece')
const Column           = require('./Column')
const Board            = require('./Board')
const CheckForWinner   = require('./CheckWinner')

let CheckWinner = new CheckForWinner
let BoardDraw   = new Board
let piece       = new Piece

BoardDraw.drawBoard(context);
BoardDraw.playSoundLoad();

let player = '1'

let col1 = new Column();
let col2 = new Column();
let col3 = new Column();
let col4 = new Column();
let col5 = new Column();
let col6 = new Column();
let col7 = new Column();

let columns = [
  col1.colArr,
  col2.colArr,
  col3.colArr,
  col4.colArr,
  col5.colArr,
  col6.colArr,
  col7.colArr
];

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

let drawPlayer = (startX, startY) => {
  let drawPiece = new Piece(startX, startY)

  player === '1' ?  drawPiece.drawCharacter(context, '#6D0125'): drawPiece.drawCharacter(context, '#D6B962');
}

let setPiece = (player, column, startX) => {
  columns[column].push(player);
  var startY = 650 + (columns[column].length) * -100;

  drawPlayer(startX, startY);
}

let columnCount = (player, column, startX) => {
  if (columns[column].length < 6) {
    setPiece(player, column, startX);
    changePlayer();
    piece.stalemate();
  } else {
    alert('Invalid choice! Choose an open column...duh');
  }
}

canvas.addEventListener('click', (e) => {
  BoardDraw.playSound()
  let x = e.offsetX;

  for (var i = 1; i <= columns.length; i++) {
    let columnX = i * 100;

    if (x < columnX) {
      columnCount(player, i - 1, columnX - 50);
      alertWinner(CheckWinner.checkForWinner(columns))
      return;
    }
  }
})
