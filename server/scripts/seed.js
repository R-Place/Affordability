const databaseFunctions = require('../../database/index.js');
const data = require('./dummy_data');

databaseFunctions.seedDatabase(data, (error, success) => {
  if (error) {
    console.log(error);
  }
  console.log(success);
});
