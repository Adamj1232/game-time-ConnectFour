class CheckForWinner {
  constructor(w) {
    this.w = w
  }

  checkForWinner (board) {
    let c = null
    let r = null

    this.checkHorizontal(c, r, board)
    this.checkVerticle(c, r, board)
    this.checkDownRight(c, r, board)
    this.checkDownLeft(c, r, board)
  }

  checkLine (a, b, c, d) {
    return (
      a != undefined &&
      a == b &&
      a == c &&
      a == d
    )
  }

  checkHorizontal(c, r, board) {
    for (c = 0; c <= 3; c++) {
      for (r = 0; r < 7; r++) {
        if (this.checkLine(board[c][r], board[c+1][r], board[c+2][r], board[c+3][r])) {
          return this.w = board[c][r]
        }
      }
    }
  }

  checkVerticle(c, r, board) {
    for (c = 0; c < 7; c++) {
      for (r = 0; r < 4; r++) {
        if (this.checkLine(board[c][r], board[c][r+1], board[c][r+2], board[c][r+3])) {
          return this.w = board[c][r];
        }
      }
    }
  }

  checkDownRight(c, r, board) {
    for (c = 0; c <= 3; c++) {
      for (r = 0; r < 4; r++) {
        if (this.checkLine(board[c][r], board[c+1][r+1], board[c+2][r+2], board[c+3][r+3])) {
          return this.w = board[c][r];
        }
      }
    }
  }

  checkDownLeft(c, r, board) {
    for (c = 3; c <= 6; c++) {
      for (r = 0; r < 4; r++) {
        if (this.checkLine(board[c][r], board[c-1][r+1], board[c-2][r+2], board[c-3][r+3])) {
          return this.w = board[c][r];
        }
      }
    }
  }
}

module.exports = CheckForWinner
