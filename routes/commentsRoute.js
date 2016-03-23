var express = require('express');
var router  = express.Router();
var mongoose = require('mongoose');
var Realtors = require('../models/realtors');
var Comment  = require('../models/comments');


router.get('/realtors/:id/comments/new', isLoggedIn, function(req, res) {
  Realtors.findById(req.params.id, function(err, realtor) {
    if (err) {
      console.log(err);
    } else {
      res.render('comments/new', {realtors: realtor, user: req.user});
    }
  });
});

router.post('/realtors/:id/comments', isLoggedIn, function(req, res) {
  Realtors.findById(req.params.id, function(err, realtor) {
    if (err) {
      console.log(err);
      res.redirect('/realtors');
    } else {
      Comment.create(req.body.comment, function(err, comment) {
        if (err) {
          console.log(err);
        } else {
          comment.author._id = req.user._id;
          comment.author.username = req.user.username;
          comment.save(); // "comment" refers to the comment call back from the function above
          //realtor."comments" refers to the comments array in realtor.js Schema
          realtor.comments.push(comment);
          realtor.save();
          console.log(comment);
          res.redirect('/realtors/' + realtor._id);
        }
      });
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
