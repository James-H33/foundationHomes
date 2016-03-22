var mongoose = require('mongoose');

var realtorsSchema = new mongoose.Schema({
  rName: String,
  rImage: String,
  rAbout: String,
  rComments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]
});

module.exports = mongoose.model('Realtors', realtorsSchema);
