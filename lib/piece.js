class Piece {
  constructor (startX, startY, context, player = '1') {
    this.startX  = startX
    this.startY  = startY
    this.context = context
    this.player = player
    this.pieceCount = 0
    this.stalemate();
  }

  stalemate() {
    this.pieceCount++
    this.pieceCount === 42 ? alert ('Stalemate') : null
  }

  drawCharacter(context, player) {
    let playerCharacter = document.getElementById("player" + player);

    context.drawImage(playerCharacter, this.startX, this.startY);
  }

}

module.exports = Piece
