var express = require('express');
var router = express.Router();

var mysqlDB = require('../../config/database.js');

//유저 목록
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
},

//유저 저장
exports.save = function (req, res, next) {
  var email = req.body.params.email;
  var password = req.body.params.password;
  var name = req.body.params.name;
  var sql = 'INSERT INTO USER (Email, Password, Name) VALUES(?, ?, ?)';
  var params = [email, password, name];
  mysqlDB.query(sql, params, function (err, rows, fields) {
    if (!err) {
      console.log(rows);
      console.log(fields);
      res.send(true);
       
    } else {
      res.send(err);
       
    }
  })
},

//유저 상세
exports.detail = function(req, res, next) {
  console.log("유저 상세")
  console.log(req.body.params)
  var No = req.body.params.No;
  var sql = 'SELECT * FROM USER WHERE No = ?';
  var params = [No];
  mysqlDB.query(sql, params, function (err, rows, fields) {
    if(!err) {
      res.send(rows);
       
    } else {
      res.send(err);
       
    }
  })
},

//유저 수정
exports.update = function (req, res, next) {
},

//유저 삭제
exports.delete = function (req, res, next) {
  var no = req.body.params.no;

  console.log(no)

  var sql = 'DELETE FROM USER WHERE No=?';
  var params = [no];
  mysqlDB.query(sql, params, function (err, rows, fields) {
    if (!err) {
      // console.log(rows);
      // console.log(fields);
      res.send(true)
    } else {
      res.send(err)
    }
  })
}