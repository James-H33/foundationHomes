var express  = require('express');
var router   = express.Router();
var passport = require('passport');
var User     = require('../models/user');


// Main Page Routes
router.get('/', function(req, res) {
  res.redirect('/main');
});

router.get('/main', function(req, res) {
  res.render('index', {user: req.user});
});

// ============================
// Auth Routes
// ============================

// Register Route

router.get('/register', function(req, res) {
  res.render('register', {user: req.user});
});

router.post('/register', function(req, res) {
  var newUser = (new User({username: req.body.username}));
  User.register(newUser, req.body.password, function(err, user) {
    if (err) {
      console.log(err);
      res.render('register');
    } else {
      passport.authenticate('local')(req, res, function() {
        res.redirect('/main');
      });
    }
  });
});

// Login Routes
router.get('/login', function(req, res) {
  res.render('login', {user: req.user});
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/main',
  failureRedirect: '/login'
}), function(req, res){
});

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/main');
});

// Middleware
function isLoggedIn(req, res, next) {
  if(req.isAuthenticated()) {
    return next();
  }
    res.redirect('/login');
}

module.exports = router;
