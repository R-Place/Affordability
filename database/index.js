const mysql = require('mysql');

const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

connection.connect();

const seedDatabase = ({ prices }, callback) => {
  connection.query('TRUNCATE homes', (error) => {
    if (error) {
      callback(error);
    } else {
      const strPrices = `("${prices.join('"), ("')}")`;
      connection.query(`INSERT into homes (price) VALUES ${strPrices}`, (newError, result) => {
        if (newError) {
          callback(newError);
        } else {
          callback(null, result);
        }
      });
    }
  });
};

const insertHomePrices = (prices, callback) => {
  const strPrices = `("${prices.join('"), ("')}")`;
  connection.query(`INSERT into homes (price) VALUES ${strPrices}`, (error, result) => {
    if (error) {
      callback(error);
    } else {
      callback(null, result);
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
  insertHomePrices,
};
