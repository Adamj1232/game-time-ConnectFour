let assert = require('chai').assert;
let Board  = require('../lib/board')

describe('Board', function() {

  let board = new Board()

  it('should be a class', function() {
    assert.isFunction(Board)
  })

  it('should be an object', function() {
    assert.isObject(board)
  })

})
