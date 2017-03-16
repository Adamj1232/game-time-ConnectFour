var index = require('./index.js')


function Column() {
  // this.x = x; // starts 0
  // this.y = y;
  this.startX = startX // starting point for draw hard coded at 50 for col1. 150 for col2 .....
  this.startY = startY // starting point for draw hard coded at 550. Decrement every piece by 100 after that.
  this.squares = [];
}

var boardArr = [col1.squares, col2.squares, col3.squares, col4.squares, col5.squares, col6.squares, col7.squares];

var boardArr = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
]
// Set boundaries on each square. col1[0] squareX = 0, squareY = 600

// click col1, push new Piece into that column array
// check if there are 4 in a row in that column
// if col1.length < 4 who cares?

// check row - whatever current index of the new piece in the column col1[4] check index 4 of all the other columns
// maybe check diagonal?? if not no big deal

// if mouse click x is inside 0-100, that's col1
// 100-200 that's col2---e.offsetX;


let col1 = new Column();
let col2 = new Column();
let col3 = new Column();
let col4 = new Column();
let col5 = new Column();
let col6 = new Column();
let col7 = new Column();




module.exports = Board
