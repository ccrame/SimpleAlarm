var express = require("express");
var port = process.env.PORT || 4000;

var app = express();

app.get('/bower_components/*',function(req,res){
  res.sendFile(__dirname + req.originalUrl);
});

app.use(express.static(__dirname + '/client'));
app.listen(port);