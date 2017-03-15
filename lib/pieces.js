function Piece (player, color){
  this.height = 100;
  this.width = 100;
  this.player = player;
  this.color = color;
}

function drawP1() {
  context.beginPath();
  context.fillStyle = this.color;
  context.arc(150, 550, 45, 0, Math.PI * 2, true)
  context.fill();
}


document.getElementById

module.exports = Piece
