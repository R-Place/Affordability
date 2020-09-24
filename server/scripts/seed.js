const seedData = require('../../database/index.js')
const data = require('./dummy_data')

console.log(seedData);
seedData.seedData(data);