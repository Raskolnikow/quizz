/*
 *
 */

var express = require('express');
var card = require('./models')()

module.exports = function() {
  var api = express.Router();

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

  //api.put();

  return api;  
}
