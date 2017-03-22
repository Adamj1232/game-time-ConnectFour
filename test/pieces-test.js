let assert = require('chai').assert;
let Piece  = require('../lib/piece')

describe('Piece', function() {

  it('should be a class', function() {
    assert.isFunction(Piece)
  })

  it('should be an object', function() {
    let piece = new Piece()
    assert.isObject(piece)
  })

  it('should have a startX position', function() {
    let piece = new Piece(100)
    assert.equal(piece.startX, 100)
  })

  it('should have a startY position', function() {
    let piece = new Piece(100, 200)
    assert.equal(piece.startY, 200)
  })

  // it('should have a color', function() {
  //   let piece = new Piece(null, 'green')
  //   assert.equal(piece.drawPiece('green'), 'green')
  // })

})
