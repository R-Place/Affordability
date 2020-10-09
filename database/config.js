const mysql = require('mysql');

const mysqlConfig = {
  host: '172.17.0.2',

  port: '3306',

  user: 'root',

  password: 'complexpassword',

  database: 'affordability',

};

const connection = mysql.createConnection(mysqlConfig);

connection.connect();

module.exports = connection;
