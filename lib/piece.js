class Piece {
  // pass in player
  constructor (startX, startY, context, player = 1) {
    this.startX  = startX
    this.startY  = startY
    this.context = context
    this.pieceCount = 0
    this.player = player;
    this.stalemate();
  }

  stalemate() {
    this.pieceCount++
    this.pieceCount === 42 ? alert ('Stalemate') : null
  }
  // drawCharacter(context) {
  //   let player = document.getElementById("player" + this.player);
  //
  //   context.drawImage(player, this.startX, this.startY);
  // }
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
