// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var taco = {
  selectAll: function(cb) {
    orm.selectAll("tacos", function(res) {
      cb(res);
    });
  },
  
  insertOne: function(taco, cb) {
    orm.insertOne(taco, function(res) {
      cb(res);
    });
  },
  updateOne: function(id, cb) {
    orm.updateOne([id], function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller
module.exports = taco;
