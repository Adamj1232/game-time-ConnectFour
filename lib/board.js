class Board {
  constructor(context) {
    this.context = context
    this.drawBoard = (context) => {
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
  }
}


module.exports = Board
