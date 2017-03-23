let assert = require('chai').assert;
let Piece  = require('../lib/Piece')

describe('Piece', function() {

  let piece = new Piece(100, 200)

  it('should be a class', function() {

    assert.isFunction(Piece)
  })

  it('should be an object', function() {
    assert.isObject(piece)
  })

  it('should have a startX position', function() {
    assert.equal(piece.startX, 100)
  })

  it('should have a startY position', function() {
    assert.equal(piece.startY, 200)
  })

  it('should have pieceCount with default of 0', function() {
    assert.equal(piece.pieceCount, 0)
  })

  // not clear whats supposed to be happening
  it('should be a function that increments pieceCount by 1', function() {
    var board = []
    var columns = []

    piece.set(player, column, startX);
    piece.set(player, column, startX);
    piece.set(player, column, startX);
    piece.set(player, column, startX);
    piece.set(player, column, startX);
    piece.set(player, column, startX);
    piece.set(player, column, startX);
    piece.set(player, column, startX);
    piece.set(player, column, startX);
    piece.set(player, column, startX);

    assert.equal(piece.pieceCount, 0)
    piece.stalemate();
    assert.equal(piece.pieceCount, 1)
  })

})
