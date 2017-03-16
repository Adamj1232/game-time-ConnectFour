function Piece (startX, startY, context){
  this.startX  = startX
  this.startY  = startY
  this.context = context
  this.row     = 0
}

Piece.prototype.drawP1 = function (context) {
  context.beginPath();
  context.fillStyle = 'black';
  context.arc(this.startX, this.startY, 45, 0, Math.PI * 2, true)
  context.fill();
}

Piece.prototype.drawP2 = function (context) {
  context.beginPath();
  context.fillStyle = 'green';
  context.arc(this.startX, this.startY, 45, 0, Math.PI * 2, true)
  context.fill();
}


module.exports = Piece
