/*
 * Karteikarten API
 *
 */

var _ = require('underscore');
var express = require('express');
var card = require('./models')()

module.exports = function() {
  var api = express.Router();

  // ---------------------------------------------------------------------------
  // API: return a card by their id
  api.get('/card/id/:id', function(req, res) {
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

  // ---------------------------------------------------------------------------
  // API: returns all available card-(ids)   
  api.get('/card/rand', function(req, res) {
    card.find({}).select('_id').exec(function(err, l) {
      var s = _.size(l);
      var r = Math.floor(Math.random() * s);
      console.log('rand: ' + r);
      console.log('size: ' + s);
      var tmp = l[r];
      console.log('obj: ' + tmp);
      card.findOne(tmp, function(err, doc) {
        res.json(doc);
      });

      console.log(l);
    });
  });

  // ---------------------------------------------------------------------------
  // API: returns a random picked card
  api.get('/cards/ids', function(req, res) {
    // XXX: How to find out how many cards are there to set a boundary
    //      for the random number generator?
    //      Is there a way to do it the functional way?
    card.count({ _id: "001" }, function(err, c) {
      res.json({ count: c} );
    });
    //console.log({ count: card.where({ _id: "001" }).count()} );
    //res.json({ count: card.where({}).count()} );
  });

  return {
    api: api,
    card: card
  }  
}
