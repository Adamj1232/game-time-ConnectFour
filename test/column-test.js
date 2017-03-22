let assert = require('chai').assert;
let Column  = require('../lib/Column')

describe('Column', function() {
  let column = new Column(100, 200)

  it('should be a class', function() {
    assert.isFunction(Column)
  })

  it('should be an object', function() {
    assert.isObject(column)
  })

  it('should have a startX position', function() {
    assert.equal(column.startX, 100)
  })

  it('should have a startY position', function() {
    assert.equal(column.startY, 200)
  })

  it('should have a column array', function() {
    assert.deepEqual(column.colArr, [])
  })

})
