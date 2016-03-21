var mongoose = require('mongoose');

var homesSchema = new mongoose.Schema({
  name: String,
  location: String,
  price: String,
  image: String
});

// var Homes = mongoose.model('Homes', homesSchema);

module.exports = mongoose.model('Homes', homesSchema);
