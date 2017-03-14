var canvas = document.getElementById("game")
var context = canvas.getContext('2d');
draw();
drawP1();
drawP2();

function draw() {
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
