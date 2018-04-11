var express = require('express');
var app = express();

app.get('/', function(req, res){
var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
res.send(ip);
});


app.listen(3000, "0.0.0.0");
