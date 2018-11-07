// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
  selectAll: function(fromTable, callback){
    let queryString = "SELECT * FROM ??";
    connection.query(queryString, [fromTable], function(err, res){
      if(err) throw err;
      console.log(res);
    })
  },

  insertOne: function(tableChoice, col2, col3, callback){
    let queryString = "INSERT INTO ?? (??) VALUES (?)";
    connection.query(queryString, [tableChoice, col2, col3], function(err, res){
      if(err) throw err;
      console.log(res)
    })
  },

  updateOne: function(table, col1, val1, col2, val2, callback){
    let queryString = "UPDATE ?? WHERE (??) VALUES (?)";
    connection.query(queryString, [table, col1, val1, col2, val2], function(err, res){
      if(err) throw err;
      console.log(res)
    })
  }

}; // ENDS orm

// Export the orm object for the model
module.exports = orm;
