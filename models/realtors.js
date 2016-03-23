var mongoose = require('mongoose');

var realtorsSchema = new mongoose.Schema({
  name: String,
  image: String,
  about: String,
  author: {
      id: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User"
      },
      username: String
   },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]
});

module.exports = mongoose.model('Realtors', realtorsSchema);
