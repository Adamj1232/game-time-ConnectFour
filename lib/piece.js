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
  drawCharacter1(context) {
    let player1 = document.getElementById("player1");

    context.drawImage(player1, this.startX, this.startY);
  }

  drawCharacter2(context) {
    let player2 = document.getElementById("player2");
    
    context.drawImage(player2, this.startX, this.startY);
  }
}

module.exports = Piece
