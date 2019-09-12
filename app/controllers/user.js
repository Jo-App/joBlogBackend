var express = require('express');
var router = express.Router();

var mysqlDB = require('../../config/database.js');

exports.list = function (req, res, next) {
    mysqlDB.query('select * from user', function (err, rows, fields) {
        if (!err) {
            console.log(rows);
            console.log(fields);
            var result = JSON.stringify(rows)
            //  + '<br><br> fields : ' + JSON.stringify(fields);
            res.send(result);
        } else {
            console.log('query error : ' + err);
            res.send(err);
        }
    });
}
