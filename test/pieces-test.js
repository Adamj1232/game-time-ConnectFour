let assert   = require('chai').assert;
let Piece = require('../lib/pieces')

describe('Piece', function() {

  it('should be a function', function() {
    assert.isFunction(Piece)
  })

  it('should istantiate new piece', function() {
    let piece = new Piece()
    assert.isObject(piece)
  })

  it('should have height of 100', function() {
    let piece = new Piece()
    assert.equal(piece.height, 100)
  })

  it('should have width of 100', function() {
    let piece = new Piece()
    assert.equal(piece.width, 100)
  })

  it('should have a player', function() {
    let piece = new Piece('player')
    assert.equal(piece.player, 'player')
  })

  it('should have a color', function() {
    let piece = new Piece('player', 'red')
    assert.equal(piece.color, 'red')
  })

})
