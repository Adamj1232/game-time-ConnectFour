const canvas           = document.getElementById("game")
const context          = canvas.getContext('2d');
const Piece            = require('./Piece')
const Board            = require('./Board')
const CheckForWinner   = require('./CheckWinner')

let checkWinner = new CheckForWinner
let board       = new Board
var piece       = new Piece

let player = piece.player
let boardColumns = board.columns

board.drawBoard(context);
board.playSoundLoad();

let changePlayer = () => {
  player = player === '1' ? '2' : '1';
}

let playerMove = (player, column, startX) => {
  if (boardColumns[column].length < 6) {
    board.setPiece(player, column, startX);
    changePlayer();
    piece.stalemate();

  } else {
    alert('Invalid choice! Choose an open column...duh');
  }
}

let addPlayerPieceToColumn = (e) => {
  let x = e.offsetX;

  for (var i = 1; i <= boardColumns.length; i++) {
    let columnX = i * 100;

    if (x < columnX) {
      playerMove(player, i - 1, columnX - 95);
      checkWinner.checkForWinner(boardColumns)
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
    checkWinner.w === '1' ? (document.querySelector('#winningPlayer').innerHTML = "Robots Win! <br /> Click here to play again?", document.getElementById('winningPlayer').addEventListener('click', function() {
      location.reload();
    })) : (document.querySelector('#winningPlayer').innerHTML = "Ninjas Win! <br /> Click here to play again?", document.getElementById('winningPlayer').addEventListener('click', function() {
      location.reload();
    }))
  }
}

canvas.addEventListener('click', (e) => {
  board.playPieceDropSound()
  addPlayerPieceToColumn(e)
})
