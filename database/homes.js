const connection = require('./config.js');

const insertPrices = (prices, callback) => {
  const strPrices = `("${prices.join('"), ("')}")`;
  connection.query(`INSERT into homes (price) VALUES ${strPrices}`, (error, result) => {
    if (error) {
      callback(error);
    } else {
      callback(null, result);
    }
  });
};

const seedDatabase = (prices, callback) => {
  connection.query('TRUNCATE homes', (error) => {
    if (error) {
      callback(error);
    } else {
      insertPrices(prices, callback);
    }
  });
};

const getPrices = (callback) => {
  connection.query('SELECT * FROM homes', (error, data) => {
    if (error) {
      callback(error);
    } else {
      callback(null, data);
    }
  });
};

module.exports = {
  insertPrices,
  seedDatabase,
  getPrices,
};
