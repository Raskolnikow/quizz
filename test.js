/*
 *
 */

var mocha = require('mocha');
var express = require('express');
var assert = require('assert');
var superagent = require('superagent');

var URL_ROOT = 'http://localhost:3000';

describe('Card API test', function() {
  var Card;
  var api;
  var server;

  before(function() {
    api = require('./api')();
    Card = api.card;

    var app = express();
    app.use(api.api);
    server = app.listen(3000);

  });

  after(function() {
    server.close();
  });

  beforeEach(function(done) {
    Card.remove({}, function(error) {
      assert.ifError(error);
      done();
    });
  });

  it('Should get a card with id 001', function(done) {
    Card.create({ _id: '001', question: 'was', answer: 'das' }, function(err,doc) {
      assert.ifError(err);
      var url = URL_ROOT + '/card/id/001';
      superagent.get(url, function(error, res) {
        assert.ifError(error);
        var result;
        assert.doesNotThrow(function() {
          result = JSON.parse(res.text);
        });

        //assert.ok(result.card);
        assert.equal(result._id, '001');
        assert.equal(result.question, 'was');
        assert.equal(result.answer, 'das');
        done();
      });
    });
  });
});
