/*
 *
 */

var express = require('express');

var app = express();
var api = require('./api')();

app.use('/api/v1', api.api);

app.listen(3000);
console.log('Server listening on port 3000!');
