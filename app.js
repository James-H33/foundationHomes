var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var port = process.env.port || 27017;
var portIP = process.env.IP;


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.redirect('/main');
});

app.get('/main', function(req, res) {
  res.render('index');
});

// app.listen(port, portIP, function() {
//   console.log("Server has started..");
// });

app.listen(process.env.port, process.env.IP, function() {
  console.log("Server has started..");
})
