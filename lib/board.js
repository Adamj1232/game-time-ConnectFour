const canvas           = document.getElementById("game")
const context          = canvas.getContext('2d');
const Piece            = require('./Piece')


class Board {
  constructor(context, startX, startY) {
    this.context = context
    this.startX = startX
    this.startY = startY
    this.columns = [[], [], [], [], [], [], []]

    this.drawBoard = (context) => {

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
  }

  playPieceDropSound () {
    let sound = document.getElementById("audio");

    sound.play()
  }

  playSoundLoad () {
    let sound1 = document.getElementById("audio1");

    sound1.play()
  }

  playSoundWinner () {
    let winSound = document.getElementById("winner");

    winSound.play()

  }

  drawPlayer (startX, startY, player) {

    let piece = new Piece(startX, startY, player)

    piece.drawCharacter(context, player);
  }

  setPiece (player, col, startX) {
    var startY;
    var colHeight = 100;
    var canvasHeight = 605;

    this.columns[ col ].push(player);
    startY = canvasHeight + this.columns[ col ].length * -colHeight;

    this.drawPlayer(startX, startY, player);
  }
}


module.exports = Board
