let assert = require('chai').assert;
let Board  = require('../lib/Board')

describe('Board', function() {

  let board = new Board(context, 100, 200)

  it('should be a class', function() {
    assert.isFunction(Board)
  })

  it('should be an object', function() {
    assert.isObject(board)
  })

  it('should have a column array that contains 7 columns', function() {
    assert.deepEqual(board.columns, [[], [], [], [], [], [], []])
  })

})
