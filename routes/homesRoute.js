var express = require('express');
var router  = express.Router();
var Homes   = require('../models/homes');

// Homes Routes
router.get('/homes', function(req, res) {
  Homes.find({}, function(err, homes) {
    if(err) {
      console.log(err);
    } else {
      res.render('homes/homes', {home: homes});
    }
  });
});

// Middleware
function isLoggedIn(req, res, next) {
  if(req.isAuthenticated()) {
    return next();
  }
    res.redirect('/login');
}

module.exports = router;
