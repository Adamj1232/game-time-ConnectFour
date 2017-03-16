function Piece (player, color){
  this.player = player;
  this.color = color;
}

function drawP1() {
  context.beginPath();
  context.fillStyle = black;
  context.arc(x, 550, 45, 0, Math.PI * 2, true)
  context.fill();
}

function drawP2() {
  context.beginPath();
  context.fillStyle = green;
  context.arc(x, 550, 45, 0, Math.PI * 2, true)
  context.fill();
}


// var piece = new Piece(player)
// console.log(piece)

document.getElementById

module.exports = Piece
