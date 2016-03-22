var express = require('express');
var router = express.Router();
var Realtors = require('../models/realtors');

router.get('/realtors', function(req, res ) {
  res.render('realtors/realtors');
});

// Middleware
function isLoggedIn(req, res, next) {
  if(req.isAuthenticated()) {
    return next();
  }
    res.redirect('/login');
}

module.exports = router;
