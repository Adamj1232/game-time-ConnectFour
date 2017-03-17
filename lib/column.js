function Column(startX, startY) {
  this.startX = startX // starting point for draw
  this.startY = startY // starting point for draw
  this.colArr = [];
}


// check row - whatever current index of the new piece in the column col1[4] check index 4 of all the other columns
// maybe check diagonal?? if not no big deal

module.exports = Column
