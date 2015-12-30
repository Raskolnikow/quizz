/*
 *
 */

var express = require('express');

module.exports = function() {
  var api = express.Router();
  api.get('/card', function(req, res) {
    res.json({ _id: "001", question: "wer bin ich?", antwort: "sebastian" });    
  });  

  return api;  
}
