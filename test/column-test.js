let assert = require('chai').assert;
let Column  = require('../lib/column')

describe('Column', function() {

  it('should be a class', function() {
    assert.isFunction(Column)
  })

  it('should be an object', function() {
    let column = new Column()
    assert.isObject(column)
  })

  it('should have a startX position', function() {
    let column = new Column(100, 200)
    assert.equal(column.startX, 100)
  })

  it('should have a startY position', function() {
    let column = new Column(100, 200)
    assert.equal(column.startY, 200)
  })

  it('should have a column array', function() {
    let column = new Column(100, 200)
    assert.deepEqual(column.colArr, [])
  })

})
