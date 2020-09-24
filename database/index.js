const mysql = require('mysql');

const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

connection.connect();

const seedDatabase = (data, callback) => {
  connection.query('TRUNCATE homes', (error) => {
    if (error) {
      callback(error);
    } else {
      data.prices.forEach((price) => {
        connection.query(`INSERT into homes (price) VALUES("${price}")`, (newError, result) => {
          if (error) {
            callback(newError);
          } else {
            callback(null, result);
          }
        });
      });
    }
  });
};

const getHomePrices = (callback) => {
  connection.query('SELECT * FROM homes', (error, data) => {
    if (error) {
      callback(error);
    } else {
      callback(null, data);
    }
  });
};

module.exports = {
  connection,
  seedDatabase,
  getHomePrices,
};
