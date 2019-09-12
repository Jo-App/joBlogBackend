var mysql = require('mysql');
//import mysql from 'mysql';

var connection = mysql.createConnection({
    host: '106.10.57.75',
    post: 3306,
    user: 'root',
    password: '!smuc890',
    database: 'joblog'
});

module.exports = connection;