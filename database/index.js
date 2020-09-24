const mysql = require('mysql');
const mysqlConfig = require('./config.js');
const connection = mysql.createConnection(mysqlConfig);

connection.connect();

var seedData = function(data) {
  connection.query(`TRUNCATE homes`, (error, result) => {
    if (error) {
      console.log(error);
    } else {
      data.prices.forEach((price) => {
        connection.query(`INSERT into homes (price) VALUES("${price}")`, (error, result) => {
          if (error) {
            console.log(error);
          } else {
            console.log(result);
          }
        })
      })
    }
  })
};

var getHomePrices = function(callback) {
  connection.query(`SELECT * FROM homes`, (error, data) => {
    if (error) {
      callback(error);
    } else {
      callback(data);
    }
  })
};


module.exports = {
  seedData,
  getHomePrices
}