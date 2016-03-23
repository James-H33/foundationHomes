var express       = require('express');
var app           = express();
var bodyParser    = require('body-parser');
var mongoose      = require('mongoose');
var passport      = require('passport');
var localStrategy = require('passport-local');
var Homes         = require('./models/homes');
var Realtors      = require('./models/realtors');
var User          = require('./models/user');
var Comment       = require('./models/comments');
var seedDB        = require('./seeds');


// Ports
var port    = process.env.PORT || 27017;
var portIP  = process.env.IP;

// Routes
var homesRoutes   = require('./routes/homesRoute');
var indexRoutes    = require('./routes/indexRoute');
var realtorsRoutes = require('./routes/realtorsRoute');
var commentsRoutes = require('./routes/commentsRoute');


mongoose.connect('mongodb://localhost/foundation_homes');
// mongoose.connect('mongodb://retsbud:String33@ds015508.mlab.com:15508/foundation_homes');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

// Seeds the DB - seeds.js
seedDB();



//Passport Configuration
app.use(require('express-session')({
  secret: "Some Secret",
  resave: false,
  saveUninitialized: false
}));

// Checks for a user on every route(.locals). next(); keeps the code moving
app.use(function(req, res, next){
  res.locals.user = req.user;
  next();
});

app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use('/', homesRoutes);
app.use('/', indexRoutes);
app.use(realtorsRoutes);
app.use(commentsRoutes);


app.listen(port, portIP, function() {
  console.log("Server has started..");
});

// app.listen(process.env.port, process.env.IP, function() {
//   console.log("Server has started..");
// })
