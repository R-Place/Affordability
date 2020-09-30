const mysql = require('mysql');

const mysqlConfig = {
  user: 'root',

  password: 'Pw0nZor1!',

  database: 'affordability',
};

const connection = mysql.createConnection(mysqlConfig);

connection.connect();

module.exports = connection;
