/*
 *
 */

var express = require('express');

var app = express();
//var api = require('./api');
debugger;
app.use('/api/v1', require('./api')());

app.listen(3000);
console.log('Server listening on port 3000!');
