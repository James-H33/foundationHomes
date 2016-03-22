var mongoose = require('mongoose');

var realtorsSchema = new mongoose.Schema({
  relName: String,
  relImage: String,
  relAbout: String,
  relComments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]
});

module.exports = mongoose.model('Realtors', realtorsSchema);
