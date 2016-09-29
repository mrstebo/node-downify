var expect = require('chai').expect;
var downify = require('../lib/downify');

describe('downify', function() {
  it('should downify lower case text', function() {
    expect(downify('hello')).to.equal('hello');
  });
  it('should downify upper case text', function() {
    expect(downify('HELLO')).to.equal('hello');
  });
  it('should downify mixed case text', function() {
    expect(downify('hElLo')).to.equal('hello');
  });
  it('should downify all the words', function() {
    expect(downify('SOME TEXT')).to.equal('some text');
  });
});
