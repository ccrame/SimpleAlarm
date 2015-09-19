var express = require("express");
var port = process.env.PORT || 4000;

var app = express();

app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/', express.static(__dirname + '/client'));
app.listen(port);