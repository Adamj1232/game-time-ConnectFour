class Piece {
  constructor (startX, startY, context) {
    this.startX  = startX
    this.startY  = startY
    this.context = context
  };
  drawPiece(context, color) {
    context.beginPath();
    context.fillStyle = color;
    context.arc(this.startX, this.startY, 45, 0, Math.PI * 2, true)
    context.fill();
  }
}

module.exports = Piece
