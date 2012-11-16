var assert = require('assert');
var should = require('should');

function f(s) {
  return s.length;
}

function async(callback) {
  setTimeout(function() {
    callback(null, 'ok');
  }, 500);
}

describe('function f(s)', function() {
  it('should return the length of the string', function() {
    assert.equal(f('123'), 3);
  });

  it('it should be a function', function() {

    (typeof(f) == 'function').should.be.ok;
  });

  it('should just work', function(done) {
    this.timeout(5000);
    async(function(err, result){
      debugger
      assert(err == undefined);
      done()
    });
  });
});
