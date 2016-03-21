var express     = require('express');
var app         = express();
var mongoose    = require('mongoose');
var bodyParser  = require('body-parser');
var Homes       = require('./models/homes');
var seedDB      = require('./seeds');


// Ports
var port    = process.env.PORT || 27017;
var portIP  = process.env.IP;


// mongoose.connect('mongodb://localhost/foundation_homes');
mongoose.connect('mongodb://retsbud:String33@ds015508.mlab.com:15508/foundation_homes');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
seedDB();


app.get('/', function(req, res) {
  res.redirect('/main');
});

app.get('/main', function(req, res) {
  res.render('index');
});

app.get('/homes', function(req, res) {
  Homes.find({}, function(err, homes) {
    if(err) {
      console.log(err);
    } else {
      res.render('homes/homes', {home: homes});
    }
  });
});

app.listen(port, portIP, function() {
  console.log("Server has started..");
});

// app.listen(process.env.port, process.env.IP, function() {
//   console.log("Server has started..");
// })
