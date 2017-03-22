class CheckForWinner {
  constructor() {

  // Check for winner
    this.checkLine = (a, b, c, d) => {
      return ((a != undefined) && (a == b) && (a == c) && (a == d));
    }

    this.checkForWinner = (board) => {
      let c = null
      let r = null


      // Check horizontal
      for (c = 0; c <= 3; c++) {
        for (r = 0; r < 7; r++) {
          if (this.checkLine(board[c][r], board[c+1][r], board[c+2][r], board[c+3][r])) {
            return board[c][r];
          }
        }
      }
      // Check vertical
      for (c = 0; c < 7; c++) {
        for (r = 0; r < 4; r++) {
          if (this.checkLine(board[c][r], board[c][r+1], board[c][r+2], board[c][r+3])) {
            return board[c][r];
          }
        }
      }
      // Check down-right
      for (c = 0; c <= 3; c++) {
        for (r = 0; r < 4; r++) {
          if (this.checkLine(board[c][r], board[c+1][r+1], board[c+2][r+2], board[c+3][r+3])) {
            return board[c][r];
          }
        }
      }
      // Check down-left
      for (c = 3; c <= 6; c++) {
        for (r = 0; r < 4; r++) {
          if (this.checkLine(board[c][r], board[c-1][r+1], board[c-2][r+2], board[c-3][r+3])) {
            return board[c][r];
          }
        }
      }
    }
  }
}

module.exports = CheckForWinner
