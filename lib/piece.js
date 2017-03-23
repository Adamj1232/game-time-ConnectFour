class Piece {
  constructor (startX, startY, context) {
    this.startX  = startX
    this.startY  = startY
    this.context = context
    this.pieceCount = 0

    this.stalemate = () => {
      this.pieceCount++
      this.pieceCount === 42 ? alert ('Stalemate') : null
    }

  }
  drawCharacter(context, color) {
    context.beginPath();
    context.fillStyle = color;
    context.arc(this.startX, this.startY, 45, 0, Math.PI * 2, true)
    context.fill();
  }
  // drawPlayer(startX, startY, player) {
  //   player === '1' ?  this.drawCharacter(context, 'red'): this.drawCharacter(context, 'yellow');
  // }
}

module.exports = Piece
