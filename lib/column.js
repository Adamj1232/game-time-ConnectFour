function Column(startX, startY) {
  this.startX = startX // starting point for draw hard coded at 50 for col1. 150 for col2 .....
  this.startY = startY // starting point for draw hard coded at 550. Decrement every piece by 100 after that.
  this.squares = [];
}


// check if there are 4 in a row in that column
// if col1.length < 4 who cares?

// check row - whatever current index of the new piece in the column col1[4] check index 4 of all the other columns
// maybe check diagonal?? if not no big deal

module.exports = Column
