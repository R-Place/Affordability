const mysql = require('mysql');

const mysqlConfig = {
  host: '172.17.0.2',

  port: '3306',

  // host: '3.88.85.5',

  // port: '8000',

  user: 'root',

  password: 'complexpassword',

  database: 'affordability',

};

const connection = mysql.createConnection(mysqlConfig);

connection.connect();

module.exports = connection;
