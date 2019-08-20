var express = require('express');
var router = express.Router();

var mysqlDB = require('../../config/database.js');

exports.index = function(req, res, next) {
    res.render('index');
}