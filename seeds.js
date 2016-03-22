var mongoose = require('mongoose');
var Homes = require('./models/homes');
var Realtors = require('./models/realtors');

var data = [
  {
    name: "Rickard Valley",
    location: "Florida",
    price: "250,000",
    image: "http://knoxvillesroofing.com/wp-content/uploads/2015/10/Before-You-List-Your-House-For-Sale-Should-You-Replace-the-Roof.jpg"
  },
  {
    name: "Neal Communties",
    location: "Florida",
    price: "100,000",
    image: "http://1cqgxm3l59yi2wwbnn3qy35h.wpengine.netdna-cdn.com/wp-content/uploads/2013/09/Melyssas-house-for-sale-in-Washington.jpg"
  },
  {
    name: "Gutlin Lane",
    location: "Florida",
    price: "425,000",
    image: "http://1cqgxm3l59yi2wwbnn3qy35h.wpengine.netdna-cdn.com/wp-content/uploads/2013/09/Debbies-house-for-sale-in-Atlanta.jpg"
  },
  {
    name: "Casser Town",
    location: "Tampa, FL",
    price: "288,000",
    image: "http://agbeat.com/wp-content/uploads/2012/07/house-for-sale.jpg"
  },
  {
    name: "Rampton City",
    location: "Florida",
    price: "288,000",
    image: "http://agbeat.com/wp-content/uploads/2012/07/house-for-sale.jpg"
  },
  {
    name: "Casser Town",
    location: "Georgia",
    price: "708,000",
    image: "http://agbeat.com/wp-content/uploads/2012/07/house-for-sale.jpg"
  },
  {
    name: "Kurts Villa",
    location: "Punta Gorda, FL",
    price: "1,000,000",
    image: "http://agbeat.com/wp-content/uploads/2012/07/house-for-sale.jpg"
  },
  {
    name: "Wrong Turn",
    location: "Dead End",
    price: "1,000",
    image: "http://agbeat.com/wp-content/uploads/2012/07/house-for-sale.jpg"
  }
]

function seedDB() {
  Homes.remove({}, function(err) {
    if(err) {
      console.log(err);
    } else {
      console.log("Homes Removed");
      data.forEach(function(seed) {
        Homes.create(seed, function(err, home) {
          if(err) {
            console.log(err);
          } else {
            console.log("Homes Created");
            home.save();
          }
        });
      });
    }
  });
}

var relProfiles = [
  {
    
  },
]

module.exports = seedDB;
