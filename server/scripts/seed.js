const mysql = require('mysql');
const mysqlConfig = require('../../database/config.js');
const data = require('./dummy_data.js')
const connection = mysql.createConnection(mysqlConfig);

connection.connect();


var seedData = function(data) {

  connection.query(`TRUNCATE homes`, (error, result) => {
    if (error) {
      console.log(error);
    } else {
      data.prices.forEach((price) => {
        console.log(price, 'PRICE')
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

seedData(data);