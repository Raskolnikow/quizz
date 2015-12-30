/*
 * Definition of the Karteikarten Schema
 */

var mongoose = require('mongoose');

var cardSchema = {
  _id: { type: String },
  question: { type: String },
  answer: { type: String }

};

module.exports = new mongoose.Schema(cardSchema);
module.exports.cardSchema = cardSchema;
