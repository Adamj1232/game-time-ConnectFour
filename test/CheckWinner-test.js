let assert = require('chai').assert;
let CheckForWinner  = require('../lib/CheckWinner')

describe('CheckForWinner', function () {

  let checkForWinner = new CheckForWinner()

  let board = [
    [1],
    [1],
    [1, 1, 1, 1],
    [1, 2, 1, 2],
    [2, 2, 2, 1],
    [1, 2],
    [2]
  ]
  
  let c = null
  let r = null


  it('should be a class', function () {
    assert.isFunction(CheckForWinner)
  });

  it('should have a function that returns true if player 1 gets four in a row', function () {
    assert.equal(checkForWinner.checkLine(1, 1, 1, 1), true)
  });

  it('should have a function that returns true if player 2 gets four in a row', function () {
    assert.equal(checkForWinner.checkLine(2, 2, 2, 2), true)
  });

  it('should have a function that returns false if player 1 does not get 4 in a row', function () {
    assert.equal(checkForWinner.checkLine(1, 1, 1, 2), false)
  });

  it('should have a function that returns false if player 2 does not get 4 in a row', function () {
    assert.equal(checkForWinner.checkLine(2, 2, 2, 1), false)
  });

  it('should have a function that checks horizontally on the board for four of one player in a row', function () {
    assert.equal(checkForWinner.checkHorizontal(c, r, board), 1)
  })

  it('should have a function that checks vertically on the board for four of one player in a row', function () {
    assert.equal(checkForWinner.checkVerticle(c, r, board), 1)
  })

  it('should have a function that checks diagonally down and right on the board for four of one player in a row', function () {
    assert.equal(checkForWinner.checkDownRight(c, r, board), 1)
  })

  it('should have a function that checks diagonally down and left on the board for four of one player in a row', function () {
    assert.equal(checkForWinner.checkDownLeft(c, r, board), 2)
  })
})
