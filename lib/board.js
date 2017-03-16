// var index = require('./index.js')


function Column(startX, startY) {
  this.startX = startX // starting point for draw hard coded at 50 for col1. 150 for col2 .....
  this.startY = startY // starting point for draw hard coded at 550. Decrement every piece by 100 after that.
  this.squares = [];
}

// Column.prototype.drawPiece = (color) => {
//   context.beginPath();
//   context.fillStyle = color;
//   context.arc(this.startX, this.startY, 45, 0, Math.PI * 2, true)
//   context.fill();
// }

// Set boundaries on each square. col1[0] squareX = 0, squareY = 600

// click col1, push new Piece into that column array
// check if there are 4 in a row in that column
// if col1.length < 4 who cares?

// check row - whatever current index of the new piece in the column col1[4] check index 4 of all the other columns
// maybe check diagonal?? if not no big deal

// if mouse click x is inside 0-100, that's col1
// 100-200 that's col2---e.offsetX;



module.exports = Column
