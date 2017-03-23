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
    this.playSound = () => {
      let sound = document.getElementById("audio");

      sound.play()
    }
    this.playSoundLoad = () => {
      let sound1 = document.getElementById("audio1");

      sound1.play()
    }
    this.playSoundWinner = () => {
      let winSound = document.getElementById("winner");

      winSound.play()
    }
  }
}


module.exports = Board
