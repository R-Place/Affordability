const mysql = require('mysql');
const mysqlConfig = require('./config.js');
const data = require('../server/scripts/dummy_data.js')
const connection = mysql.createConnection(mysqlConfig);

connection.connect();




module.exports = {

}