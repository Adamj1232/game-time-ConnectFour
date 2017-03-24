const canvas           = document.getElementById("game")
const context          = canvas.getContext('2d');
const Piece            = require('./Piece')
const Column           = require('./Column')
const Board            = require('./Board')
const CheckForWinner   = require('./CheckWinner')

let checkWinner = new CheckForWinner
let board       = new Board
let piece       = new Piece

let player = '1'

// move into board
let col1 = new Column();
let col2 = new Column();
let col3 = new Column();
let col4 = new Column();
let col5 = new Column();
let col6 = new Column();
let col7 = new Column();

let columns = [
  col1.rowArr,
  col2.rowArr,
  col3.rowArr,
  col4.rowArr,
  col5.rowArr,
  col6.rowArr,
  col7.rowArr
];

board.drawBoard(context);
board.playSoundLoad();

let changePlayer = () => {
  player = player === '1' ? '2' : '1';
}

let drawPlayer = (startX, startY) => {

  let piece = new Piece(startX, startY, player)

  // piece.drawCharacter(context);
  player === '1' ?  piece.drawCharacter1(context): piece.drawCharacter2(context);
}

// should be in piece class
let setPiece = (player, col, startX) => {
  var startY;
  var colHeight = 100;
  var canvasHeight = 605;

  columns[ col ].push(player);
  startY = canvasHeight + columns[ col ].length * -colHeight;

  drawPlayer(startX, startY);
}

let playerMove = (player, column, startX) => {
  if (columns[column].length < 6) {
    setPiece(player, column, startX);
    changePlayer();
    piece.stalemate();

  } else {
    alert('Invalid choice! Choose an open column...duh');
  }
}

let addPlayerPieceToColumn = (e) => {
  let x = e.offsetX;

  for (var i = 1; i <= columns.length; i++) {
    let columnX = i * 100;

    if (x < columnX) {
      playerMove(player, i - 1, columnX - 95);
      checkWinner.checkForWinner(columns)
      setTimeout(function() {
        alertWinner()
      }, 1);
      return;
    }
  }
}

let alertWinner = () => {
  if (checkWinner.w) {
    board.playSoundWinner();
    if (window.confirm('Player ' + checkWinner.w + ' WINS! Play another game?')) {
      location.reload();
    }
  }
}

canvas.addEventListener('click', (e) => {
  board.playPieceDropSound()
  addPlayerPieceToColumn(e)
})
