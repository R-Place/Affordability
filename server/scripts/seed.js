const { Homes } = require('../../database/index.js');
const prices = require('./dummy_data');

Homes.seedDatabase(prices, (error, success) => {
  if (error) {
    return console.log(error);
  }

  return console.log(success);
});
