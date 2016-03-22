var express = require('express');
var router = express.Router();
var Realtors = require('../models/realtors');

router.get('/realtors', function(req, res ) {
  Realtors.find({}, function(err, realtors) {
    if (err) {
      console.log(err);
    } else {
      res.render('realtors/realtors', {realtor: realtors, user: req.user});
    }
  });
});

router.get('/realtors/:id', isLoggedIn, function(req, res) {
  Realtors.findById(req.params.id, function(err, foundRealtor) {
    if (err) {
      console.log(err);
    } else {
      res.render('realtors/realtorsProfile', {realtor: foundRealtor, user: req.user})
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
