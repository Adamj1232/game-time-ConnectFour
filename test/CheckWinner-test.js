let assert = require('chai').assert;
let CheckForWinner  = require('../lib/CheckWinner')

describe('CheckForWinner', function () {

  let checkForWinner = new CheckForWinner()

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

})
