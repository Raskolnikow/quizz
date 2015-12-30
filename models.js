/*
 *
 */

var mongoose = require('mongoose');
var cardSchema = require('./card');

module.exports = function() {

  var db = mongoose.connect('mongodb://localhost/quiz');

  var Card = mongoose.model('Card', cardSchema);

  return {
    Card: Card
  };
};
