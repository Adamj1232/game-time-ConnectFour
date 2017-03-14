function pieces (player, color){
  this.width = 100;
  this.height = 100;
  this.player = player;
  this.color = color;
}


function drawP1() {
  context.beginPath();
  context.fillStyle = 'green';
  context.arc(150, 550, 45, 0, Math.PI * 2, true)
  context.fill();
}

function drawP2() {
  context.beginPath();
  context.fillStyle = 'black';
  context.arc(150, 450, 45, 0, Math.PI * 2, true)
  context.fill();
}
