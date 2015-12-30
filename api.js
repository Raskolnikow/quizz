/*
 * Karteikarten API
 *
 */

//TODO: implement API endpoint for random cards

var express = require('express');
var card = require('./models')()

module.exports = function() {
  var api = express.Router();

  api.get('/card/:id', function(req, res) {
    card.findOne({ _id: req.params.id }, function(error, doc) {
      if(error) {
        return res.
          status(500).
          json({ error: error.toString() });
      }
      if(!doc) {
        return res.
          status(404).
          json({ error: 'Not found' });
      }
      res.json(doc);
    });
  });  

  api.get('/card/rand', function(req, res) {
    // XXX: How to find out how many cards are there to set a boundary
    //      for the random number generator?
    //      Is there a way to do it the functional way?

  });

  //api.put();

  return api;  
}
